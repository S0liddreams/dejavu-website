"use client";
import Image from "next/image";
import React, { useState } from "react";
import ServiceModal from "../ServiceModal/ServiceModal"; // Adjust the path if needed

const services = [
  {
    id: "move-in-concierge",
    title: "Move-In Concierge",
    description:
      "From managing deliveries to unpacking essentials, we ensure your new space feels like home from day one.",
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
      "We'll help pack, clean, and prep your old space for a smooth handover—without the last-minute chaos.",
    image: "/images/serviceImage2.jpg",
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
    id: "furniture-assembly",
    title: "Furniture Assembly",
    description:
      "Our experts assemble beds, desks, wardrobes, and more—fast, safely, and just the way you want it.",
    image: "/images/serviceImage3.jpg",
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
    id: "add-ons",
    title: "Add-ons",
    description:
      "We offer curtain hanging, trash removal, home styling support, and more to complete your move-in experience.",
    image: "/images/serviceImage4.jpg",
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
