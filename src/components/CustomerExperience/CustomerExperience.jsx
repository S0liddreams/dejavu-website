import Image from "next/image";
import React from "react";
import CustomerTestimony from "./CustomerTestimony";

const CustomerExperience = () => {
  return (
    <div className="max-w-[1440px] lg:h-[790px] lg:py-[64px] lg:px-[72px] p-[20px] lg:mt-[60px] mx-auto">
      <div className="lg:h-[662px]  grid md:grid-cols-2 gap-[20px] xl:gap-[40px] ">
        <div className=" text-center md:text-left ">
          <p className="lg:text-[38px] text-[24px] xl:w-[526px] font-medium ">Customer Experiences that Inspires Trust</p>
          <p className="lg:text-[16px] text-[14px] xl:w-[526px]">
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
