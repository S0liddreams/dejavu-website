
import Footer from '@/components/Footer/Footer'
import Header2 from '@/components/Header2/Header2'
import TermsOfUse from '@/components/TermsOfUseFile/TermsOfUse'
import React from 'react'

const terms = () => {
  return (
    <div className='lg:pt-[8px] lg:pb-[64px] lg:px-[72px] lg:h-[448px] lg:gap-[24px] flex flex-col'>
        <Header2 />

        <div className='w-full lg:h-[280px] rounded-[16px] lg:p-[62px] bg-[#E6EEF6] flex flex-col '>
          <div className='w-full lg:h-[200px] lg:gap-[16px] flex flex-col justify-center items-center '>
            <p className='lg:text-[60px] font-medium text-center text-[#0550A1]'>Terms of Use</p>
            <p className='lg:text-[16px] text-center text-[#171717] font-medium'>Last Updated: June 29, 2025</p>

          </div>

        </div>


        <div>

          <TermsOfUse/>
        </div>

        <div>
          <Footer/>
        </div>


    </div>
  )
}

export default terms