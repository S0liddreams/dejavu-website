import Image from "next/image";
import React from "react";

const CustomerExperience = () => {
  return (
    <div className="max-w-[1440px] lg:h-[790px] lg:py-[64px] lg:px-[72px] p-[20px] lg:mt-[60px] mx-auto">
      <div className="lg:h-[662px]  grid md:grid-cols-2 gap-[20px] xl:gap-[40px]">
        <div>
          <p className="lg:text-[38px]">Customer Experiences that Inspires Trust</p>
          <p className="lg:text-[16px]">
            Hear from real clients who’ve trusted us to handle their transitions
            with professionalism, care, and attention to detail.
          </p>
        </div>

        <div className="lg:h-[662px] lg:w-full  ">
          <div className="lg:w-full lg:h-[194px] bg-[#E6EEF6] rounded-[16px]  lg:px-[10px] xl:p-[20px]">
            <div className="] lg:h-full lg:flex flex-row lg:justify-between lg:items-center">
              <div className="lg: flex flex-col justify-between gap-[20px]">
                <p className="lg:text-[14px]">
                  I had less than 24 hours to settle into my new condo before
                  starting a new job. The Dejavu Move-In-Out team was a
                  lifesaver—efficient, respectful, and unbelievably fast. I came
                  back to a fully set-up home with every detail in place.
                </p>
                <div className="lg:h-[42px]">
                  <p className="lg:text-[16px] font-semibold text-[#171717]">Sophia Carter</p>
                  <p className="lg:text-[12px] text-[#525252]">Furniture Assembly</p>
                </div>
              </div>
              <div className="lg:w-[520px]  flex justify-center">
                <Image  src="/images/customer 1.png" alt="alt"  className="lg:w-[120px] lg:h-[120px] rounded-[100%]"width={120} height={120}  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerExperience;
