// components/ServiceModal.js

import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-[#00000066] bg-opacity-50 z-50 flex justify-center items-center lg:p-[36px]">
  <div
    className="flex flex-col lg:flex-row lg:p-[36px] xl:w-[1176px] lg:w-[900px] lg:gap-[36px] bg-white 
      h-auto max-h-screen overflow-y-auto md:w-[450px] my-[18px] p-[20px] 
      lg:h-[520px] xl:h-[556px] rounded-[16px]"
  >
    <div className="flex flex-col lg:flex-row xl:w-[1104px] lg:gap-[36px] xl:h-[484px] w-full relative justify-center items-center">
      
      {/* Image */}
      <div
        className="lg:h-full h-[170px] xl:w-[418px] lg:w-[400px] w-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url('${service.image}')` }}
      ></div>

      {/* Text Content - centered between image height */}
      <div className="flex flex-col justify-center h-full lg:h-[484px]">
        <div className="lg:w-[449px] xl:w-[620px]">
          <h1 className="lg:text-[30px] text-[20px] w-fit font-medium mt-6">
            {service.title}
          </h1>
          <p className="text-gray-600 xl:text-[16px] text-[14px] mt-4 mb-6">
            {service.modalDiscription}
          </p>
          <h3 className="lg:text-[20px] font-medium mt-6">What’s included:</h3>
          <ul className="text-gray-600 xl:text-[16px] text-[14px] mt-4 mb-6 list-disc list-inside">
            {service.inclusions.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Close Button */}
        <div className="absolute top-0 right-0 p-4">
          <div className="h-[40px] cursor-pointer flex justify-center items-center w-[40px] rounded-[200px] gap-[8px] bg-[#1717174D]">
            <button
              onClick={onClose}
              className="text-white w-full cursor-pointer h-full hover:text-gray-800 text-[25px]"
            >
              &times;
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <div className="z-50 lg:w-[175px] w-[150px] h-[44px] p-[4px] pl-[12px] lg:h-[48px] lg:pl-[12px] lg:pr-[4px] rounded-[100px] flex justify-between items-center text-[#0550A1] font-medium bg-white text-[13px] md:text-[14px] xl:text-[16px] shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out group mt-4">
          Book a Service
          <Link href="/contactUs">
            <div className="bg-[#0550A1] lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] rounded-full text-white flex justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-black group-hover:shadow-lg">
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

export default ServiceModal;
