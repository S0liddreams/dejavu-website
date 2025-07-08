import Image from 'next/image'
import React from 'react'
import HeaderLink from './HeaderLink'

const Header = () => {
  return (
    <div className='xl:w-full  mx-0 flex  items-center '>
        <div className='w-full  xl:h-[72px] py-[16px] xl:flex xl:justify-between'> 
            <div><Image src="/images/dvjlogo.svg" alt="Logo" width={93} height={40}  /></div>
            <div className=' '>
                <HeaderLink/>
            </div>
            
        </div>
    </div>
  )
}

export default Header