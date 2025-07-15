import Image from 'next/image'
import React from 'react'

const Team = () => {
  return (
    <div>
      {/**No Stress, No Mess. Just Honest, Helpful Moving Support */}

      <div className=" lg:h-[852px] md:h-[600px] xl:px-[74px]">
        <div className="xl:h-[724px] items-center xl:gap-[48px] mt-[40px] lg:mt-0 p-[20px] ">
          <div className="lg:text-[48px] text-[24px] w-[335px] md:w-[400px] lg:w-[746px] md:mx-auto font-semibold mb-[40px]">
            No Stress, No Mess. Just Honest, Helpful Moving Support
          </div>

          <div className=" xl:h-[560px] xl:w-[1168px] grid grid-cols-2 gap-4 lg:mt-[50px]  justify-between mx-auto lg:flex">
            {/**Section 1 */}
            <div className=" lg:w-[280px] flex flex-col justify-between  md:p-[12px] lg:py-[50px] ">
              <div className="lg:h-[196px]  flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/vettedSVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Vetted Professionals
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    Our team is fully background-checked, trained, and committed
                    to delivering top-tier service with care and integrity.
                  </p>
                </div>
              </div>

              <div className="lg:h-[196px] flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/transparentSVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Transparent Pricing
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    No hidden fees, no last-minute surprises. What you see is
                    what you pay—always clear, always fair.
                  </p>
                </div>
              </div>
            </div>

            {/**Section 2 */}
            <div className="xl:w-[416px] hidden lg:block ">
              <Image
                src="/images/Rectangle 1.png"
                alt="alt"
                width={416}
                height={560}
              />
            </div>

            {/**Section 3 */}

            <div className=" lg:w-[280px] flex flex-col justify-between md:p-[12px] lg:py-[50px] ">
              <div className="lg:h-[196px]  flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/insuredSVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Vetted Professionals
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    Our team is fully background-checked, trained, and committed
                    to delivering top-tier service with care and integrity.
                  </p>
                </div>
              </div>

              <div className="lg:h-[196px] flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/timelySVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Transparent Pricing
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    No hidden fees, no last-minute surprises. What you see is
                    what you pay—always clear, always fair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div>
  )
}

export default Team