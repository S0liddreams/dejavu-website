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
    "Moving out is just as stressful as moving in, sometimes even more. Our Move-Out Concierge service takes the pressure off your final days in your old space.",
    image: "/images/serviceImage2.jpg",
    modalDiscription:
        "Moving out is just as stressful as moving in, sometimes even more. Our Move-Out Concierge service takes the pressure off your final days in your old space. Whether you're ending a lease or selling a home, we’ll help with smart packing, item sorting, and leave-no-trace tidying so you can hand over your keys with confidence. It’s perfect for renters who want to secure their deposit or homeowners preparing for buyers.",

    inclusions: [
      "Organized packing & labeling",
      "Decluttering or donation sorting",
      "Light cleaning & wipe-down",
      "Trash & packaging removal",
      "Coordination with movers (if needed)",
    ],
  },
  {
    id: "furniture-assembly",
    title: "Furniture Assembly",
    description:
    "Skip the frustration of figuring out instruction manuals. Our Furniture Assembly experts handle everything from IKEA wardrobes to custom beds,",
    image: "/images/serviceImage3.jpg",
    modalDiscription:
    "Skip the frustration of figuring out instruction manuals. Our Furniture Assembly experts handle everything from IKEA wardrobes to custom beds, bookshelves, desks, and more. Whether it's one piece or a full room, we guarantee a neat, damage-free setup with zero hassle. You sit back, while we bring your new furniture to life.",
    inclusions: [
      "Beds, bunk beds, cribs",
      "Desks, tables, and chairs",
      "Wardrobes, shelves, dressers",
      "TV stands, home office setups",
    ],
  },
  {
    id: "add-ons",
    title: "Add-ons",
    description:
    "Need help beyond the basics? Our Add-On Services are designed to complete your home setup experience with those finishing touches that make all the difference.",
    image: "/images/serviceImage4.jpg",
    modalDiscription:
    "Need help beyond the basics? Our Add-On Services are designed to complete your home setup experience with those finishing touches that make all the difference. From hanging curtains and setting up décor to disposing of packaging or deep cleaning after the move, we’ve got you covered. Just select what you need during booking or let us know on the day.",
    inclusions: [
      "Curtain and rod installation",
      "Mirror and frame hanging",
      "TV mounting",
      "Trash & box removal",
      "Light cleaning & wipe-down",
      "Small appliance setup",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="h-full min-w-[375px] lg:h-[652px] flex flex-col lg:gap-[30px] mt-[100px] md:mt-[30px] lg:py-[64px] lg:px-[72px] p-[20px] relative">
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
