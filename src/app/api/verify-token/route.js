import { getTransactionByPaymentId } from '../../lib/db'; // Update import to match your structure
import { NextResponse } from 'next/server';

export async function GET(req) {
    try {
        // Extract m_payment_id from query parameters
        const { searchParams } = new URL(req.url);
        const m_payment_id = searchParams.get('m_payment_id');

        if (!m_payment_id) {
            return NextResponse.json({ status: 'invalid', message: 'm_payment_id is required' }, { status: 400 });
        }

        // Fetch transaction from the database using the m_payment_id
        const transaction = await getTransactionByPaymentId(m_payment_id);

        if (!transaction) {
            return NextResponse.json({ status: 'invalid', message: 'Invalid m_payment_id' });
        }

        // Check if payment is complete
        if (transaction.paymentStatus !== 'Complete') {
            return NextResponse.json({ status: 'invalid', message: 'Payment not complete' });
        }

        // Return the source code URL
        return NextResponse.json({ status: 'valid', sourceCodeUrl: transaction.sourceCodeUrl });
    } catch (error) {
        console.error('Error fetching transaction:', error);
        return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 });
    }
}
