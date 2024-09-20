'use client';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Loader from '../../components/Loader';

export default function PaymentSuccessPage() {
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(true); // Added to track loading state

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const m_payment_id = urlParams.get('m_payment_id');

        const pollPaymentStatus = async () => {
            try {
                const response = await fetch(`/api/verify-token?m_payment_id=${m_payment_id}`);
                const data = await response.json();

                if (data.success) {
                    setDownloadUrl(data.sourceCodeUrl);
                    setLoading(false); // Stop loading once payment is successful
                } else if (data.status === 'Pending') {
                    // If still pending, continue polling
                    setTimeout(pollPaymentStatus, 5000); // Retry every 5 seconds
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
            pollPaymentStatus(); // Start polling
        } else {
            setErrorMessage('Invalid payment ID');
            setLoading(false);
        }
    }, []);

    if (errorMessage) {
        return <p>{errorMessage}</p>;
    }

    return (
        <div className='text-black h-screen flex gap-6 justify-center items-center flex-col'>
            {loading ? (
                <div>
                    {/* <p>Verifying your payment...</p> */}
                    <Loader/>
                </div>
            ) : (
                <>
                    <div className='w-full flex justify-center items-center'>
                        <h1 className='font-semibold text-[1.5rem]'>Payment Successful!</h1>
                        <p className='ml-4 text-[1.7rem]'><FaCheckCircle/></p>
                    </div>

                    <p>Your payment was successful. You can download your source code from the link below:</p>
                    <a href={`${downloadUrl}?dl=`} download className='xl:w-[15%] flex justify-center items-center w-[50%] h-14 text-white text-[1rem] rounded-full bg-[#455CE9] hover:bg-[#455CE9]/50 transition-all duration-300'>
                        Download Source Code
                    </a>
                </>
            )}
        </div>
    );
}
