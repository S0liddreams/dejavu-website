import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='max-w-[2650px] xl:h-[504px]  lg:py-[64px] lg:px-[72px] px-[20px] py-[40px] mt-[20px]  bg-[#F5F5F5] '>
        <div className=' xl:h-[356px] h-[1272px] md:h-[300px] lg:h-[290px] flex flex-col justify-between '>
            <div className=' w-full grid md:grid-cols-2 items-center'>
                <div className=' flex items-center '>
                    <p className='lg:text-[48px] text-[24px] font-medium h-[58px] '>How It Works</p>
                </div>
                <div>
                    <p className='w-[335px] md:w-full text-[14px] xl:text-[16px]'>A hassle-free experience designed for busy people, growing families, students, and anyone to take the pressure off and get you settled in—quickly and professionally.</p>
                </div>

            </div>
            <div className='w-full mt-[25px] md:mt-0'>
                <Image src="/images/howItWorksLarge.svg" alt="alt" className='hidden md:block' width={2650} height={320} />
                <Image src="/images/howItworksSmall.svg" alt="alt" className='block md:hidden w-full h-[1118px]' width={335} height={1118} />
            </div>

        </div>


    </div>
  )
}

export default HowItWorks