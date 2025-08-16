"use client";
import Image from "next/image";
import React, { useState } from "react";
import ServiceModal from "../ServiceModal/ServiceModal"; // Adjust the path if needed

const services = [
  {
    id: "move-in-concierge",
    title: "Move-In Concierge",
    description:
      "Moving is more than just boxes, it’s a life transition. Our Move-In Concierge service takes care of all the settling-in tasks that usually cause stress.",
    image: "/images/serviceImage1.jpg",
    modalDiscription:
      "Moving is more than just boxes, it’s a life transition. Our Move-In Concierge service takes care of all the settling-in tasks that usually cause stress. From coordinating your delivery schedule and organizing your essentials to setting up your kitchen and making the beds, we make sure your home is livable from day one. Perfect for professionals, families, students, or anyone short on time, our concierge team brings order and calm to your move-in day.",
    inclusions: [
      "Unpacking essentials",
      "Light home organizing",
      "Basic setup of living areas, kitchen, and bedrooms",
      "Coordination with delivery services",
      "Home walk-through support",
    ],
  },
  {
    id: "move-out-concierge",
    title: "Move-Out Concierge",
    description:
      "Move-Out Concierge service is designed to take the stress out of leaving your old space. From organizing and coordinating logistics to cleaning, packing,",
    image: "/images/serviceImage2.jpg",
    modalDiscription:
      "Move-Out Concierge service is designed to take the stress out of leaving your old space. From organizing and coordinating logistics to cleaning, packing, and ensuring property handover requirements are met, we handle the details so you can focus on your next chapter. Whether it’s scheduling cleaners, managing disassembly of furniture, arranging repairs, or coordinating with landlords or property managers, our team ensures a seamless, hassle-free move-out experience.",
    inclusions: [
      "Packing and preparation of items for relocation.",
      "Disassembly of furniture, fixtures, and appliances as required.",
      "Space cleaning assistance and organization for turnover.",
      "Disposal or donation coordination of unwanted items.",
      "Ensuring the property is left in move-out ready condition.",
    ],
  },
  {
    id: "furniture-assembly",
    title: "Furniture Assembly",
    description:
      "Our Furniture Assembly service provides expert assistance in putting together your new or existing furniture quickly and securely.",
    image: "/images/serviceImage3.jpg",
    modalDiscription:
    "Our Furniture Assembly service provides expert assistance in putting together your new or existing furniture quickly and securely. From beds, sofas, and dining sets to wardrobes, shelving units, and office furniture, our team ensures every piece is assembled correctly, safely, and according to manufacturer guidelines. We bring the right tools, follow detailed instructions, and leave your space clean and organized so you can enjoy your furniture without the hassle or frustration of doing it yourself.",
    inclusions: [
      "Professional assembly of new or existing furniture items.",
      "Secure installation of components per manufacturer’s guidelines.",
      "Disassembly and reassembly for relocation or reconfiguration purposes.",
      "Optional alignment with interior layout preferences.",
    ],
  },
  {
    id: "add-ons",
    title: "Add-ons",
    description:
      "Add-ons service allows you to customize and enhance your moving or concierge experience with extra conveniences tailored to your needs.",
    image: "/images/serviceImage4.jpg",
    modalDiscription:
    "Add-ons service allows you to customize and enhance your moving or concierge experience with extra conveniences tailored to your needs. From packing supplies, deep cleaning, and storage solutions to specialized handling, extra manpower, or same-day support, these optional services give you the flexibility to create a personalized package. With Add-ons, you get more than just the basics—you get the convenience, efficiency, and peace of mind that fit your lifestyle.",
    inclusions: [
      "Customized support beyond standard packages (e.g., décor placement, small appliance setup, specialty handling).",
      "Tailored solutions to address unique relocation requirements.",
      "Additional manpower or time allocation upon request",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="h-full min-w-[375px] lg:h-[652px] mt-[100px] md:mt-[50px] lg:py-[64px] lg:px-[72px] p-[20px] relative">
      <div className="text-center mb-[40px] lg:mb-0">
        <h1 className="text-[24px] font-medium lg:text-[48px] text-[#171717]">
          Our Services
        </h1>
        <p className="text-[14px] lg:text-[16px] text-[#525252] max-w-[636px] mx-auto">
          Explore reliable, professional services tailored to every stage of
          your move; whether you're settling in, moving out, or starting fresh.
        </p>
      </div>

      <div className="relative flex justify-center mt-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex gap-[16px] xl:gap-[24px] max-w-[1440px]">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setSelectedService(service)}
              className="relative w-[335px] lg:w-[240px] xl:w-[306px] mx-auto h-[354px] bg-cover bg-center rounded-[16px] overflow-hidden text-center transform hover:scale-105 transition-transform duration-300 group cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 335px, (max-width: 1024px) 240px, 306px"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent group-hover:from-black/60 transition-all duration-500 ease-in-out" />

              {/* Text container */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-[16px] xl:px-[20px] pb-[20px]">
                <h1 className="text-white text-left font-medium text-[20px] lg:text-[18px] xl:text-[24px] mb-2">
                  {service.title}
                </h1>
                <p className="text-white text-left font-light text-[12px] xl:text-[14px] leading-[150%]">
                  {service.description}
                </p>
              </div>

              {/* Arrow icon on hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for selected service */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Services;
