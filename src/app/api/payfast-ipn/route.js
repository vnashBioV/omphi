import { NextResponse } from 'next/server';
import {
    updateTransactionStatus,
    getTransactionByPaymentId,
    saveSourceCodeUrl
} from '../../lib/db';

const verifyPayFastIPN = async (body) => {
    const payfastUrl = 'https://www.payfast.co.za/eng/query/validate';
    
    const response = await fetch(payfastUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
    });
    
    const result = await response.text();
    console.log('IPN Verification Result:', result); // Logging for debug purposes
    return result === 'VALID';
};

export async function POST(req) {
    try {
        const body = await req.text();
        const formData = new URLSearchParams(body);

        // Extract payment data from IPN
        const payment_status = formData.get('payment_status');
        const m_payment_id = formData.get('m_payment_id');
        const token = formData.get('custom_str1');  // token passed in IPN
        
        // Verify the IPN with PayFast
        const isValidIPN = await verifyPayFastIPN(body);
        
        if (!isValidIPN) {
            return NextResponse.json({ success: false, message: 'Unable to verify payment' });
        }

        // Only handle payment complete status
        if (payment_status === 'COMPLETE') {
            const transaction = await getTransactionByPaymentId(m_payment_id);

            if (!transaction) {
                return NextResponse.json({ success: false, message: 'Transaction not found' });
            }

            // Update the payment status
            await updateTransactionStatus(transaction.token, 'Complete');

            // Return the source code URL after successful payment
            return NextResponse.json({
                success: true,
                sourceCodeUrl: transaction.sourceCodeUrl, // This is the URL stored in the database
            });
        }

        return NextResponse.json({ success: false, message: 'Payment not complete' });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
}

