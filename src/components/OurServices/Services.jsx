import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Move-In Concierge",
    description:
      "From managing deliveries to unpacking essentials, we ensure your new space feels like home from day one.",
    image: "/images/serviceImage1.jpg", // Make sure this path exists
  },
  {
    title: "Move-Out Concierge",
    description:
      "We’ll help pack, clean, and prep your old space for a smooth handover—without the last-minute chaos.",
    image: "/images/serviceImage2.jpg",
  },
  {
    title: "Furniture Assembly",
    description:
      "Our experts assemble beds, desks, wardrobes, and more—fast, safely, and just the way you want it.",
    image: "/images/serviceImage3.jpg",
  },
  {
    title: "Add-ons",
    description:
      "We offer curtain hanging, trash removal, home styling support, and more to complete your move-in experience.",
    image: "/images/serviceImage4.jpg",
  },
];

const Services = () => {
  return (
    <div className="h-full min-w-[375px] lg:h-[652px] mt-[100px] md:mt-[50px] lg:py-[64px] lg:px-[72px] p-[20px] jusi ">
      <div className=" h-[100px] lg:h-[122px] flex flex-col lg:gap-[16px] text-center items-center  mb-[40px] lg:mb-0">
        <h1 className="text-[24px] font-medium lg:text-[48px] lg:h-[58px] lg:leading-[120%] text-[#171717]">
          Our Services
        </h1>
        <p className="text-[14px] lg:text-[16px] text-[#525252] w-[301px] md:w-[400px] lg:h-[48px]  lg:w-[636px]">
          Explore reliable, professional services tailored to every stage of
          your move; whether you're settling in, moving out, or starting fresh.
        </p>
      </div>
      <div className="relative h-full lg:h-[524px]  flex items-center justify-center ">
        <div className="relative z-10 grid grid-cols-1 w-full items-center justify-center   gap-[16px] xl:gap-0  md:grid-cols-2 lg:flex   max-w-[1440px] mx-auto ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-[335px] lg:w-[240px] xl:w-[306px]   mx-auto h-[354px] bg-cover bg-center rounded-[16px] overflow-hidden text-center transform hover:scale-105 transition-transform duration-300 group" // Add 'group' class here
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              {/* Overlay div */}
              <div className="absolute inset-0 [background:linear-gradient(to_top,rgba(0,0,0,0.8)_0%,rgba(0,0,0,0.6)_35%,transparent_65%)] group-hover:[background:linear-gradient(to_top,rgba(0,0,0,0.6)_0%,rgba(255,255,255,0.2)_65%,transparent_100%)] transition-all duration-500 ease-in-out"></div>

              {/* Content of the card */}
              <div className="relative z-10 px-[10px] xl:px-[20px] mt-[250px] lg:mt-[230px]   ">
                <h1 className="text-[20px] lg:text-[18px] xl:text-[24px] text-white text-left font-medium mb-4 lg:mb-2">
                  {service.title}
                </h1>
                <p className="text-[12px] xl:text-[14px] xl:w-[266px] leading-[150%] tracking-normal font-light text-justify text-white mb-6">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
