'use client';
import { useEffect, useState } from 'react';

export default function PaymentSuccessPage() {
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Extract the token from the URL query parameters
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        // Verify the token and get the download URL
        const fetchDownloadUrl = async () => {
            const response = await fetch(`/api/verify-token?token=${token}`);
            const data = await response.json();

            if (data.status === 'valid') {
                setDownloadUrl(data.sourceCodeUrl);
            } else {
                setErrorMessage(data.message);
            }
        };

        if (token) {
            fetchDownloadUrl();
        } else {
            setErrorMessage('Invalid token');
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
