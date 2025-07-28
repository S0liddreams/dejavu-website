import Footer from "@/components/Footer/Footer";
import Header2 from "@/components/Header2/Header2";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

import React from "react";

const privacy = () => {
  return (
    <div className=" h-screen">
      <div className="lg:pt-[8px] lg:pb-[64px] lg:px-[72px] pt-[4px] px-[20px] pb-[40px] lg:h-[448px] h-[312px] lg:gap-[24px] ">
        <Header2 />

        <div className="w-full lg:h-[280px] h-[200px] px-[24px]  rounded-[16px] lg:p-[62px] gap-[88px] bg-[#E6EEF6] flex flex-col ">
          <div className="w-full h-[200px] lg:gap-[16px] gap-[8px] flex flex-col justify-center items-center ">
            <p className="lg:text-[60px] text-[30px] font-medium text-center text-[#0550A1]">
              Privacy Policy
            </p>
            <p className="lg:text-[16px] text-[12px] text-center text-[#171717] font-medium">
              Last Updated: June 29, 2025
            </p>
          </div>
        </div>
      </div>

      <PrivacyPolicy />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default privacy;
