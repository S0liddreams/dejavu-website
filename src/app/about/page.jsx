import Header from "@/components/Header/Header";
import WhatWeStandFor from "@/components/WhatWeStandFor/WhatWeStandFor";
import React from "react";

const About = () => {
  return (
    <div className="lg:w-full h-full py-[8px] px-[8px]">
      {/**Fist Section Of About page */}

      <div className="lg:h-[520px] h-full w-full bg-about-image rounded-[16px] lg:mb-[64px] mb-[40px] ">
        <div className="w-full h-full bg-[#00000066] rounded-[16px]">
          <div className="lg:px-[64px] px-[16px] text-[30px] flex flex-col lg:h-[448px]  h-[304px]">
            <Header />

            <div className="flex-1 flex items-center justify-center">
              <p className="lg:text-[60px] text-white font-medium text-center">
                About Us
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:py-[64px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className="xl:w-[1296px] lg:px-[72px] px-[16px] mx-auto">
          <p className="font-medium lg:text-[30px] min-w-[303px] text-[18px] text-center leading-[150%] text-black">
            We deliver{" "}
            <span className="text-[#0550A1]">concierge-level service </span>for
            anyone who wants more than just boxes dropped at the door. Our team
            provides{" "}
            <span className="text-[#0550A1]">
              {" "}
              full-service unpacking, furniture assembly, move-out support, and
              detailed add-ons{" "}
            </span>{" "}
            that take the chaos out of transition and turn empty rooms into
            livable homes.
          </p>
        </div>
      </div>

      <div className="lg:h-[272px] lg:py-[64px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className="xl:w-[1296px] lg:h-[144px] grid lg:grid-cols-2  gap-[16px] mx-auto lg:gap-[8px]">
          <div className=" ">
            <p className="text-[#171717] font-medium lg:text-[48px] text-[24px]  ">
              Our Mission
            </p>
          </div>
          <div className="">
            <p className="text-[16px]  text-left text-[#525252]">
              We’re on a mission to redefine the moving experience by turning
              one of life’s most stressful moments into a seamless, supportive,
              and even enjoyable transition. We are committed to providing
              premium yet affordable concierge services, ranging from move-in
              and move-out assistance to expert furniture assembly and
              thoughtful home setup that meet the diverse needs of homeowners,
              busy professionals, families, students, and newcomers across
              Ontario.
            </p>
          </div>
        </div>
      </div>

      {/**WHAT WE STAND FOR  */}

      <div className="lg:h-[656px] lg:py-[64px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className="lg:h-[528px] flex flex-col lg:gap-[48px] gap-[30px] mx-auto">
          <div className="mx-auto w-fit">
            <p className=" text-[#171717] lg:text-[48px] text-[24px] text-center font-medium">
              What We Stand For
            </p>
            <p className="text-[#525252] text-[14px] lg:text-[16px] lg:w-[636px] text-center">
              Our values guide how we serve our clients reflecting who we are,
              how we work, and the care we bring to every home we touch.
            </p>
          </div>

          <div className="">
            <WhatWeStandFor />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
