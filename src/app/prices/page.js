import React from 'react'

const page = () => {
  return (
    <div 
        className='flex justify-between text-black h-[100%] md:px-0 px-[1rem] flex-col md:w-[1200px] w-full mx-auto my-[3rem] items-center'
    >
        <div className='flex flex-col items-center gap-6 justify-center mb-12'>
            <h3 
                className='font-bold text-[1.5rem]'
            >
                Price List
            </h3>
            <h3 className='font-bold text-[1rem] '>Website and SEO</h3>
        </div>

        <div className='flex w-full justify-between items-center md:flex-row flex-col'>
            <div 
                className='md:w-[30%] md:mb-0 mb-6 w-full h-[500px] flex p-6 shadow-lg flex-col justify-between items-center border rounded-xl'
            >
                <h3 className='text-black text-[1.2rem]'>
                    Basic
                </h3> 
                <p className='text-[1.5rem] font-bold'>R1500</p>  
                <p>website design/ redesign</p>  
                <p>website development</p>   
                <p>Website & SEO</p>
                <p>SEO Audit</p>    
                <p>Secured Hosting</p>
                <p>Web Maintenance (1 hour)</p>
                <p>On Site Optimization</p>
                <p>Performance & Speed</p>
                <p>Basic contact form</p>
                <p>Hosting & Backup</p>
            </div>
            <div 
                className='md:w-[30%] md:mb-0 mb-6 w-full h-[500px] flex p-6 shadow-lg flex-col justify-between items-center border rounded-xl'
            >
                <h3 className='text-black text-[1.2rem]'>
                    Intermediate
                </h3> 
                <p className='text-[1.5rem] font-bold'>R2500</p>  
                <p>website design/ redesign</p>  
                <p>website development</p>   
                <p>Website & SEO</p>
                <p>SEO Audit</p>    
                <p>Secured Hosting</p>
                <p>Web Maintenance (1 hour)</p>
                <p>On Site Optimization</p>
                <p>Performance & Speed</p>
                <p>Hosting & Backup</p>
                <p>Monthly Report</p>
            </div>
            <div 
                className='md:w-[30%] w-full h-[600px] flex p-6 shadow-lg flex-col justify-between text-center items-center border rounded-xl'
            >
                <h3 className='text-black text-[1.2rem]'>
                    Advanced
                </h3> 
                <p className='text-[1.5rem] font-bold'>R4500</p>  
                <p>website design/ redesign</p>  
                <p>website development</p>   
                <p>Website & SEO</p>
                <p>SEO Audit</p>    
                <p>Secured Hosting</p>
                <p>Web Maintenance (1 hour)</p>
                <p>On Site Optimization</p>
                <p>Performance & Speed</p>
                <p>Customized BackEnd</p>
                <p>Hosting & Backup</p>
                <p>Google MyBusiness Optimisation</p>
                <p>Competitor Analysis</p>
                <p>Product indexation & optimisation</p>
                <p>Consultation</p>
                <p>UX enhancement (User Experience)</p>
            </div>
        </div>

        <div className='flex flex-col items-center gap-6 justify-center my-12'>
            <h3 className='font-bold text-[1rem] '>Social Media Packages</h3>
        </div>
        <div className='flex w-full items-center md:flex-row flex-col'>
            <div 
                className='md:w-[30%] text-center w-full h-[500px] md:mr-16 md:mb-0 mb-6 flex p-6 shadow-lg flex-col gap-4 items-center border rounded-xl'
            >
                <h3 className='text-black text-[1.2rem]'>
                    Basic
                </h3> 
                <p className='text-[1.5rem] font-bold'>R7000</p>  
                <p>Quarterly content strategy & calendar</p>
                <p className='text-center'>Quality branded weekly post with graphic design (2)</p>
                <div className='w-full flex flex-col h-fit justify-center items-center'>
                    <div 
                        className='w-[80%] h-[2.7rem] flex justify-center items-center border-[grey] border-[1px]'
                    >
                        <p>Social media platform</p>
                    </div>  
                    <div 
                        className='w-[80%] p-4 flex flex-col justify-center text-center items-center border-[grey] border-[1px]'
                    >
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                        <p>Google MyBusiness</p>
                    </div> 
                </div>
                              
            </div>
            <div 
                className='md:w-[30%] w-full text-center h-[500px] md:mr-16 md:mb-0 mb-6 flex p-6 shadow-lg flex-col gap-4 items-center border rounded-xl'
            >
                <h3 className='text-black text-[1.2rem]'>
                    Intermediate
                </h3> 
                <p className='text-[1.5rem] font-bold'>R10000</p>  
                <p>Quarterly content strategy & calendar</p>
                <p className='text-center'>Quality branded weekly post with graphic design (2-3)</p>
                <div className='w-full flex flex-col h-fit justify-center items-center'>
                    <div 
                        className='w-[80%] h-[2.7rem] flex justify-center items-center border-[grey] border-[1px]'
                    >
                        <p>Social media platform</p>
                    </div>  
                    <div 
                        className='w-[80%] p-4 flex flex-col justify-center items-center border-[grey] border-[1px]'
                    >
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>LinkedIn</p>
                        <p>Youtube</p>
                        <p>TikTok</p>
                        <p>Google MyBusiness</p>
                    </div>  
                </div>
                           
            </div>
            
        </div>

        <div className='flex flex-col items-center gap-6 justify-center my-12'>
            <h3 className='font-bold text-[1rem]'>App Development</h3>
        </div>
        <p className='mb-16 text-center'>Let's get in touch and disscuss the budget</p>

    </div>
  )
}

export default page
