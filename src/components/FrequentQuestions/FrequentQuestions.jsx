import React from "react";
import FaqDropdown from "./FaqDropdown";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const FrequentQuestions = () => {
  return (
    <div className="w-full bg-quest-image  lg:h-[1121px] mx-auto rounded-[16px]">
      <div className="w-full h-full  bg-[#00000066] lg:py-[64px] lg:px-[72px] rounded-[16px] ">
        <div className="lg:w-[904px] gap-[24px] bg-[#FFFFFF] mx-auto rounded-[16px] lg:gap-[8px] lg:p-[40px]">
          <div className="lg:w-[820px]  lg:gap-[32px]  ">
            <div className="lg:w-[746px] h-[112px] gap-[16px] mx-auto justify-between">
              <p className="lg:text-[48px] font-medium leading-[120%] lg:text-center">
                Got Questions?{" "}
              </p>
              <p className=" lg:w-[636px] lg:text-center lg:text-[16px] mx-auto lg:leading-[150%] mt-[10px] lg:h-[48px] text-[#525252]">
                We’ve answered the most common ones to help you understand
                exactly how our services work—and what to expect every step of
                the way.
              </p>
            </div>

            <div>
              <FaqDropdown />
            </div>
          </div>
        </div>

        <div className="lg:w-[904px] mt-[24px]  bg-[#FFFFFF] mx-auto rounded-[16px] lg:gap-[8px] lg:p-[40px]">
        <div className="lg:h-[48px] bg-white h-[152px] flex flex-col lg:flex-row justify-between w-full  mt-[20px]">
              <div className="leading-[150%] lg:w-[651px]">
                <p className="lg:text-[30px] text-[#171717] font-medium lg:h-[36px]">Still have a question?</p>
                <p className="text-[#737373]  text-[14px] w-[335px] md:w-[400px] lg:w-[710px]  xl:w-[740px] leading-[150%] ">
                  Can’t find what you’re looking for? Send us an email and we’ll get back to you as soon as possible.
                </p>
              </div>

              {/** Contact Us  */}

              <div className="z-50 xl:w-[150px] lg:w-[150px] w-[134px] h-[44px] p-[4px] pl-[12px] lg:h-[48px] lg:pl-[12px] lg:pr-[4px] rounded-[100px] flex justify-between items-center text-white font-medium bg-[#0550A1] text-[13px] md:text-[14px] xl:text-[16px] shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out group">
                Contact Us
                <Link href="">
                  <div className=" bg-white lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] rounded-full text-[#0550A1] flex justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-black group-hover:shadow-lg">
                    <IoIosArrowRoundForward className="w-6 h-6" />
                  </div>
                </Link>
              </div>
            </div>
            </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
