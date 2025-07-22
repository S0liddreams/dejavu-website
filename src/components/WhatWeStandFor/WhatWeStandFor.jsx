"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Reliability",
    description:
      "We show up on time, deliver what we promise, and always follow through because peace of mind starts with dependability.",
    icon: "/images/clock.svg", // Replace with actual image paths
  },
  {
    title: "Affordability",
    description:
      "We believe quality service should be accessible. That’s why we offer transparent pricing without compromising professionalism or care.",
    icon: "/images/wallet-2.svg",
  },
  {
    title: "Premium Service",
    description:
      "Every detail matters. From careful handling to thoughtful room setup, we bring concierge-level service to every move; big or small.",
    icon: "/images/briefcase.svg",
  },
  {
    title: "Trust & Safety",
    description:
      "Your space is personal, and we treat it that way. Our fully insured and background-checked team ensures you and your home are in good hands.",
    icon: "/images/shield-tick.svg",
  },
  {
    title: "Community Partnership",
    description:
      "We’re proudly rooted in Ontario and collaborate with local partners to support neighborhoods, landlords, and newcomers across the region.",
    icon: "/images/buildings-2.svg",
  },
  {
    title: "Empathy & Respect",
    description:
      "We understand that moving can be emotional. Our team approaches every job with patience, compassion, and respect for your space and journey.",
    icon: "/images/heart.svg",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
      {features.map((feature, index) => (
        <div
          key={index}
          className="min-w-[250px]  h-[134px] xl:w-[416px] bg-[#F5F5F5] lg:h-[167px] p-[20px]  rounded-[16px]"
        >
          <div className="flex flex-row justify-between  lg:gap-[16px]">
            <div>
              <p className="text-[#171717] text-[20px] lg:text-[16px] xl:text-[24px] font-medium">
                {feature.title}
              </p>
            </div>
            <div>
              <Image className="xl:w-[40px] xl:h-[40px] lg:w-[30px] lg:h-[30px] h-[20px] w-[20px]" src={feature.icon} alt={feature.title} width={40} height={40} />
            </div>
          </div>
          <div className="lg:h-[63px] lg:text-[14px] text-[12px] mt-[10px]">
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
