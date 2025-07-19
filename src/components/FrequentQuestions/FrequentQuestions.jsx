import React from 'react'
import FaqDropdown from './FaqDropdown'


const FrequentQuestions = () => {
  return (
    <div className='w-full bg-quest-image  lg:h-[1121px] mx-auto rounded-[16px]'>
      <div className="w-full h-full bg-[#00000066] lg:py-[64px] lg:px-[72px] rounded-[16px] ">
        <div className='lg:w-[904px] h-[993px] bg-[#FFFFFF] mx-auto rounded-[16px] lg:gap-[8px] lg:p-[40px]'>
            <div className='lg:w-[820px] lg:h-[776px] lg:gap-[32px]  '>
                <div className='lg:w-[746px] h-[112px] gap-[16px] mx-auto justify-between'>
                    <p className='lg:text-[48px] font-medium leading-[120%] lg:text-center'>Got Questions? </p>
                    <p className=' lg:w-[636px] lg:text-center lg:text-[16px] mx-auto lg:leading-[150%] mt-[10px] lg:h-[48px] text-[#525252]'>We’ve answered the most common ones to help you understand exactly how our services work—and what to expect every step of the way.</p>
                </div>

                <div>

                  <FaqDropdown/>
                </div>

            </div>

        </div>
</div>

    </div>
  )
}

export default FrequentQuestions