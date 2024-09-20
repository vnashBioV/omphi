'use client';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";

export default function PaymentSuccessPage() {
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const m_payment_id = urlParams.get('m_payment_id');
    
        const fetchDownloadUrl = async () => {
            try {
                const response = await fetch(`/api/verify-token?m_payment_id=${m_payment_id}`);
                const data = await response.json();
    
                if (data.success) {
                    setDownloadUrl(data.sourceCodeUrl); // Set the source code download URL
                    setLoading(false);
                } else {
                    setErrorMessage(data.message);
                    setLoading(false);
                }
                    
            } catch (error) {
                setErrorMessage('Error fetching payment status.');
                setLoading(false);
            }
        };
    
        if (m_payment_id) {
            fetchDownloadUrl();
        } else {
            setErrorMessage('Invalid payment ID');
            setLoading(false);
        }
    }, []);

    if (errorMessage) {
        return <p className="text-red-500">{errorMessage}</p>;
    }

    return (
        <div className='text-black h-screen flex gap-6 justify-center items-center flex-col'>
            <div className='w-full flex justify-center items-center'>
                <h1 className='font-semibold text-[1.5rem]'>Payment Successful!</h1>
                <p className='ml-4 text-[1.7rem]'><FaCheckCircle/></p>
            </div>
            
            {loading ? (
                <p>Verifying your payment...</p>
            ) : (
                <>
                    <p>Your payment was successful. You can download your source code from the link below:</p>
                    {downloadUrl ? (
                        <a href={`${downloadUrl}?dl=`} download className='text-blue-500 underline'>
                            Download Source Code
                        </a>
                    ) : (
                        <p>Unable to retrieve download link.</p>
                    )}
                </>
            )}
        </div>
    );
}
