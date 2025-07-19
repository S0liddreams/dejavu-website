import Image from "next/image";
import React from "react";
import CustomerTestimony from "./CustomerTestimony";

const CustomerExperience = () => {
  return (
    <div className="max-w-[1440px] lg:h-[790px] lg:py-[64px] lg:px-[72px] p-[20px] lg:mt-[60px] mx-auto">
      <div className="lg:h-[662px]  grid  md:flex md:flex-row gap-[20px]  xl:gap-[40px] ">
        <div className=" text-center md:text-left xl:w-[526px] gap-[16px] ">
          <p className="xl:text-[48px] lg:text-[34px] text-[24px] xl:w-[526px] font-medium ">Customer Experiences that Inspires Trust</p>
          <p className="lg:text-[16px] text-[14px] w-[301px] mt-[10px] lg:w-full text-[#525252] text-center leading-5 md:text-left mx-auto  md:mx-0 ">
            Hear from real clients who’ve trusted us to handle their transitions
            with professionalism, care, and attention to detail.
          </p>
        </div>

        <CustomerTestimony/>
      </div>
    </div>
  );
};

export default CustomerExperience;
