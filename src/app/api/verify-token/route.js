import { NextResponse } from 'next/server';
import { updateTransactionStatus, getTransactionByPaymentId, getStoreByItemName } from '../../lib/db';

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

        const payment_status = formData.get('payment_status');
        const m_payment_id = formData.get('m_payment_id');
        const token = formData.get('custom_str1');

        // Verify IPN with PayFast
        const isValidIPN = await verifyPayFastIPN(body);

        if (!isValidIPN) {
            return NextResponse.json({ success: false, message: 'Invalid IPN' }, { status: 400 });
        }

        if (payment_status === 'COMPLETE') {
            const transaction = await getTransactionByPaymentId(m_payment_id);

            if (!transaction) {
                return NextResponse.json({ success: false, message: 'Transaction not found' });
            }

            // Securely update the transaction status
            await updateTransactionStatus(transaction.token, 'Complete');

            // Check if the sourceCodeUrl is stored as a file reference
            if (transaction.sourceCodeUrl.startsWith('file-')) {
                // Manually build the file URL from the asset reference
                const assetRef = transaction.sourceCodeUrl;
                const projectId = process.env.SANITY_PROJECT_ID;
                const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

                // Sanity file references are typically in the format: file-<hash>-<extension>
                const [, fileId, fileExtension] = assetRef.split('-');
                const sourceCodeUrl = `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}.${fileExtension}`;

                // Return the dynamically constructed sourceCodeUrl
                return NextResponse.json({ success: true, sourceCodeUrl });
            }

            // If the URL is already valid (not a file reference), return it directly
            return NextResponse.json({ success: true, sourceCodeUrl: transaction.sourceCodeUrl });
        }

        return NextResponse.json({ success: false, message: 'Payment not complete' });
    } catch (error) {
        console.error('Error handling IPN:', error);
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
