import { getTransactionByPaymentId, getStoreByItemName } from '../../lib/db';
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

        // Fetch the store document using item_name or another unique field from the transaction
        const store = await getStoreByItemName(transaction.item_name); // Use item_name to find store

        if (!store || !store.sourceCodeFile) {
            return NextResponse.json({ success: false, message: 'Source code not found in store' });
        }

        // Return the download URL for the source code
        const sourceCodeUrl = store.sourceCodeFile.asset.url; // Access the URL from the file field
        return NextResponse.json({ success: true, sourceCodeUrl });
    } catch (error) {
        console.error('Error processing payment verification:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
}
