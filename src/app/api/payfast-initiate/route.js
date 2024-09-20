import { saveTransaction } from '../../lib/db';
import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid'; // For secure random IDs

export async function POST(req) {
    const body = await req.json();
    const { item_name, amount } = body;

    if (!item_name || !amount || isNaN(amount)) {
        return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 });
    }

    // Generate secure token and m_payment_id
    const token = nanoid();
    const m_payment_id = `item-${nanoid(10)}`;

    const paymentData = {
        merchant_id: process.env.PAYFAST_MERCHANT_ID,
        merchant_key: process.env.PAYFAST_MERCHANT_KEY,
        return_url: `${process.env.BASE_URL}/payment-success?m_payment_id=${m_payment_id}`,
        cancel_url: `${process.env.BASE_URL}/payment-cancelled`,
        notify_url: `${process.env.BASE_URL}/api/payfast-ipn`,
        name_first: 'Customer',
        email_address: 'customer@example.com',
        m_payment_id,
        amount,
        item_name,
        custom_str1: token,  // Securely track payment
    };

    const queryString = new URLSearchParams(paymentData).toString();
    const paymentUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}`;

    try {
        // Save transaction details securely in the DB
        await saveTransaction({
            token,
            m_payment_id,
            item_name,
            amount,
            paymentStatus: 'Pending',
            expirationTime: new Date(Date.now() + 15 * 60 * 1000),  // 15 minutes expiration
            sourceCodeUrl: 'https://sourcecode.co.za/',  // Update later dynamically
        });

        // Return the PayFast payment URL
        return NextResponse.json({ paymentUrl });
    } catch (error) {
        console.error('Error saving transaction:', error);
        return NextResponse.json({ error: 'Server error' }, { status: 500 });
    }
}
