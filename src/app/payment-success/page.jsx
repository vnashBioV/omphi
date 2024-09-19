'use client';
import { useEffect, useState } from 'react';

export default function PaymentSuccessPage() {
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const m_payment_id = urlParams.get('m_payment_id');

        const fetchDownloadUrl = async () => {
            try {
                // Update the endpoint to your transaction status API
                const response = await fetch(`/api/verify-token?m_payment_id=${m_payment_id}`);
                const data = await response.json();

                if (data.status === 'valid') {
                    setDownloadUrl(data.sourceCodeUrl);
                } else {
                    setErrorMessage(data.message);
                }
            } catch (error) {
                setErrorMessage('Error fetching payment status.');
            }
        };

        if (m_payment_id) {
            fetchDownloadUrl();
        } else {
            setErrorMessage('Invalid m_payment_id');
        }
    }, []);

    if (errorMessage) {
        return <p>{errorMessage}</p>;
    }

    return (
        <div>
            {downloadUrl ? (
                <div>
                    <h1>Payment Successful!</h1>
                    <p>Your payment was successful. You can download your source code from the link below:</p>
                    <a href={downloadUrl} download>Download Source Code</a>
                </div>
            ) : (
                <p>Verifying your payment...</p>
            )}
        </div>
    );
}
