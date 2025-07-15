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
    <div className="h-full min-w-[375px] lg:h-[652px] mt-[100px] md:mt-[50px] lg:mt-[60px]  ">
      <div className=" h-[100px] flex flex-col  text-center items-center  mb-[40px]">
        <h1 className="text-[24px] font-semibold lg:text-[48px] text-[#171717]">
          Our Services
        </h1>
        <p className="text-[14px] lg:text-[16px] text-[#525252] w-[301px] md:w-[400px]  lg:w-[746px]">
          Explore reliable, professional services tailored to every stage of
          your move; whether you're settling in, moving out, or starting fresh.
        </p>
      </div>
      <div className="relative h-full lg:h-[524px]  flex items-center justify-center">
        <div className="relative z-10 grid grid-cols-1   gap-6 md:grid-cols-2 lg:flex  lg:gap-2 xl:gap-8  py-10 max-w-[1440px] mx-auto ">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative w-[335px] lg:w-[240px] xl:w-[306px] h-[354px] bg-cover bg-center rounded-2xl overflow-hidden text-center transform hover:scale-105 transition-transform duration-300 group" // Add 'group' class here
              style={{ backgroundImage: `url('${service.image}')` }}
            >
              {/* Overlay div */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000bb] to-[#00000066] rounded-2xl opacity-100 group-hover:from-[#00000099] group-hover:to-[#ffffff44] group-hover:opacity-60 transition-all duration-500 ease-in-out"></div>
              {/* Content of the card */}
              <div className="relative z-10 p-6 mt-[230px] lg:mt-[190px]  ">
                <h1 className="text-[20px] lg:text-[18px] xl:text-[24px] text-white font-bold mb-4 lg:mb-2">
                  {service.title}
                </h1>
                <p className="text-[12px] xl:text-[14px] text-white mb-6">
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
