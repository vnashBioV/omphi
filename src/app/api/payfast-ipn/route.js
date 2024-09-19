import { NextResponse } from 'next/server';
import {
    updateTransactionStatus,
    getTransactionByPaymentId,
    saveSourceCodeUrl
} from '../../lib/db';

const verifyPayFastIPN = async (body) => {
    const payfastUrl = 'https://sandbox.payfast.co.za/eng/query/validate';
    
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
        
        console.log('Payment Status:', payment_status); // Debugging log
        console.log('m_payment_id:', m_payment_id); // Debugging log
        console.log('token:', token); // Debugging log

        // Verify the IPN with PayFast
        const isValidIPN = await verifyPayFastIPN(body);
        
        if (!isValidIPN) {
            console.error('Invalid IPN verification');
            return NextResponse.json({ success: false, message: 'Unable to verify payment' });
        }

        // Only handle payment complete status
        if (payment_status === 'COMPLETE') {
            // Fetch the transaction from the database
            const transaction = await getTransactionByPaymentId(m_payment_id);

            if (!transaction) {
                console.error('Transaction not found for m_payment_id:', m_payment_id);
                return NextResponse.json({ success: false, message: 'Transaction not found' });
            }

            // Update the payment status in the database
            console.log('Updating transaction status for token:', transaction.token);
            await updateTransactionStatus(transaction.token, 'Complete');

            // Save the source code URL or other required updates
            await saveSourceCodeUrl(transaction.token, transaction.sourceCodeUrl);  // Ensure this is part of your logic
            
            return NextResponse.json({ success: true });
        }

        console.warn('Payment status is not complete:', payment_status);
        return NextResponse.json({ success: false, message: 'Payment not complete' });
    } catch (error) {
        console.error('Error processing IPN:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
}
