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

        // Log the transaction payment status for debugging
        console.log('Payment status:', transaction.paymentStatus);

        // Check if payment is complete
        if (transaction.paymentStatus !== 'Complete') {
            return NextResponse.json({ success: false, message: 'Payment not complete', status: transaction.paymentStatus });
        }

        // Fetch the store document using item_name
        const store = await getStoreByItemName(transaction.item_name);
        console.log("🚀 ~ GET ~ transaction.item_name:", transaction.item_name);

        if (!store || !store.sourceCodeFile || !store.sourceCodeFile.asset || !store.sourceCodeFile.asset._ref) {
            return NextResponse.json({ success: false, message: 'Source code not found in store' });
        }

        // Manually build the file URL
        const assetRef = store.sourceCodeFile.asset._ref;
        const projectId = process.env.SANITY_PRODUCT_ID;
        const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

        // Sanity file references are typically in the format: file-<hash>-<extension>
        const [, fileId, fileExtension] = assetRef.split('-');
        const sourceCodeUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}.${fileExtension}`;

        // Return the download URL for the source code
        return NextResponse.json({ success: true, sourceCodeUrl });
    } catch (error) {
        console.error('Error processing payment verification:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' });
    }
}
