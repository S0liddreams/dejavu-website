import Breaadcrumbs from '@/components/breadcrumbs/Breaadcrumbs'
import Header from '@/components/Header/Header'
import React from 'react'

const Contact
 = () => {
  return (
    <div className='main-container lg:h-[520px] h-[304px] '>
        
        <div className='lg:h-[448px] h-[260px] bg-contact-image rounded-[16px] '>
            <div className=" w-full h-full bg-[#00000066]  lg:gap-[88px] lg:px-[64px] lg:pb-[64px] rounded-[16px] flex flex-col">
            <Header/>

            <div className='xl:w-[1296px] gap-[16px] lg:h-[200px] mx-auto '>
                <p className='lg:text-[60px] text-center text-white '>Contact Us</p>
                <div className='w-fit mx-auto'>
                    <Breaadcrumbs/>
                </div>

            </div>

            </div>

        </div>

    </div>
  )
}

export default Contact
