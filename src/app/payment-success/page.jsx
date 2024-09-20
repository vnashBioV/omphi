'use client';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import Loader from '@/components/Loader'; // Assuming you have a loader component

export default function PaymentSuccessPage() {
    const [downloadUrl, setDownloadUrl] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(true); // Loader state

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const m_payment_id = urlParams.get('m_payment_id');
    
        const fetchDownloadUrl = async () => {
            try {
                const response = await fetch(`/api/verify-token?m_payment_id=${m_payment_id}`);
                const data = await response.json();
    
                if (data.success) {
                    setDownloadUrl(data.sourceCodeUrl); // Set the source code download URL
                    setIsLoading(false); // Stop the loader
                } else {
                    setErrorMessage(data.message);
                    setIsLoading(false); // Stop the loader in case of error
                }
            } catch (error) {
                setErrorMessage('Error fetching payment status.');
                setIsLoading(false); // Stop the loader
            }
        };
    
        if (m_payment_id) {
            fetchDownloadUrl();
        } else {
            setErrorMessage('Invalid payment ID');
            setIsLoading(false); // Stop the loader
        }
    }, []);

    if (errorMessage) {
        return <p>{errorMessage}</p>;
    }

    return (
        <div className='text-black h-screen flex gap-6 justify-center items-center flex-col'>
            <div className='w-full flex justify-center items-center'>
                <h1 className='font-semibold text-[1.5rem]'>Payment Successful!</h1>
                <p className='ml-4 text-[1.7rem]'><FaCheckCircle/></p>
            </div>
            
            <p>Your payment was successful. You can download your source code from the link below:</p>

            {isLoading ? (
                <Loader />  // Show the loader while checking payment status
            ) : downloadUrl ? (
                <a href={`${downloadUrl}?dl=`} download className='xl:w-[15%] flex justify-center items-center w-[50%] h-14 text-white text-[1rem] rounded-full bg-[#455CE9] hover:bg-[#455CE9]/50 transition-all duration-300'>
                    Download Source Code
                </a>
            ) : (
                <p>Verifying your payment...</p>
            )}
        </div>
    );
}
