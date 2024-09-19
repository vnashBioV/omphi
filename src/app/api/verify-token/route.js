import { getTransactionByPaymentId, getSourceCodeFromStore } from '../../lib/db';
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const m_payment_id = searchParams.get('m_payment_id');

        if (!m_payment_id) {
            return NextResponse.json({ success: false, message: 'm_payment_id is required' });
        }

        // Fetch the transaction details
        const transaction = await getTransactionByPaymentId(m_payment_id);

        if (!transaction) {
            return NextResponse.json({ success: false, message: 'Transaction not found' });
        }

        // Check if payment is complete
        if (transaction.paymentStatus !== 'Complete') {
            return NextResponse.json({ success: false, message: 'Payment not complete' });
        }

        // Fetch the source code URL from the store document using a reference (like storeId from the transaction)
        const sourceCodeUrl = await getSourceCodeFromStore(transaction.storeId); // Assuming the transaction has a storeId reference

        if (!sourceCodeUrl) {
            return NextResponse.json({ success: false, message: 'Source code not found' });
        }

        // Return the source code URL
        return NextResponse.json({ success: true, sourceCodeUrl });
    } catch (error) {
        console.error('Error processing payment verification:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
}
