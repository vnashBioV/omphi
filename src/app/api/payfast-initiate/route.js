import { saveTransaction } from '../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const body = await req.json();
    const { item_name, amount } = body;

    if (!item_name || !amount) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Generate a token and m_payment_id
    const token = `token-${Math.random().toString(36).substr(2, 9)}`;
    const m_payment_id = `item-${Math.random().toString(36).substr(2, 9)}`;

    // Prepare the payment data for PayFast without restricting payment methods
    const paymentData = {
        merchant_id: process.env.PAYFAST_MERCHANT_ID,
        merchant_key: process.env.PAYFAST_MERCHANT_KEY,
        return_url: `${process.env.BASE_URL}/payment-success?m_payment_id=${m_payment_id}`,
        cancel_url: `${process.env.BASE_URL}/payment-cancelled`,
        notify_url: `${process.env.BASE_URL}/api/payfast-ipn`,  // IPN callback for PayFast
        name_first: 'Customer',
        email_address: 'customer@example.com',
        m_payment_id,
        amount,
        item_name,
        custom_str1: token,  // Pass token to track payment later
        // Leave out payment_method to allow all methods
    };

    const queryString = new URLSearchParams(paymentData).toString();
    const paymentUrl = `https://sandbox.payfast.co.za/eng/process?${queryString}`;

    try {
        // Save the transaction details in the database
        await saveTransaction({
            token,
            m_payment_id,  // Save m_payment_id in the database
            item_name,
            amount,
            paymentStatus: 'Pending',
            expirationTime: new Date(Date.now() + 15 * 60 * 1000),  // Set expiration time to 15 minutes
        });
        
        // Return the PayFast payment URL to the client
        return NextResponse.json({ paymentUrl });
    } catch (error) {
        console.error('Error saving transaction:', error);
        return NextResponse.json({ error: 'Error saving transaction' }, { status: 500 });
    }
}
