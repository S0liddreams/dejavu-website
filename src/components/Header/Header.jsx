import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='max-w-[1400px] mx-0 flex justify-between items-center '>
        <div className='w-full bg-amber-400 xl:h-[72px] p-[16px]'> 
            <Image src="/images/dvjlogo.svg" alt="Logo" width={93} height={40}  />
        </div>
    </div>
  )
}

export default Header