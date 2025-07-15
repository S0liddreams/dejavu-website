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
    <div className="h-[1440px} min-w-[375px] lg:h-[652px] mt-[100px] md:mt-[50px] lg:mt-[60px]  ">
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

      {/**No Stress, No Mess. Just Honest, Helpful Moving Support */}

      <div className=" h-[852px] xl:px-[74px]">
        <div className="xl:h-[724px] items-center xl:gap-[48px] mt-[40px] lg:mt-0 p-[20px] ">
          <div className="lg:text-[48px] text-[24px] w-[335px] md:w-[400px] lg:w-[746px] md:mx-auto font-semibold mb-[40px]">
            No Stress, No Mess. Just Honest, Helpful Moving Support
          </div>

          <div className=" xl:h-[560px] xl:w-[1168px] grid grid-cols-2 gap-4 lg:mt-[50px]  justify-between mx-auto lg:flex">
            {/**Section 1 */}
            <div className=" lg:w-[280px] flex flex-col justify-between  md:p-[12px] lg:py-[50px] ">
              <div className="lg:h-[196px]  flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/vettedSVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Vetted Professionals
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    Our team is fully background-checked, trained, and committed
                    to delivering top-tier service with care and integrity.
                  </p>
                </div>
              </div>

              <div className="lg:h-[196px] flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/transparentSVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Transparent Pricing
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    No hidden fees, no last-minute surprises. What you see is
                    what you pay—always clear, always fair.
                  </p>
                </div>
              </div>
            </div>

            {/**Section 2 */}
            <div className="xl:w-[416px] hidden lg:block ">
              <Image
                src="/images/Rectangle 1.png"
                alt="alt"
                width={416}
                height={560}
              />
            </div>

            {/**Section 3 */}

            <div className=" lg:w-[280px] flex flex-col justify-between md:p-[12px] lg:py-[50px] ">
              <div className="lg:h-[196px]  flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/insuredSVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Vetted Professionals
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    Our team is fully background-checked, trained, and committed
                    to delivering top-tier service with care and integrity.
                  </p>
                </div>
              </div>

              <div className="lg:h-[196px] flex flex-col justify-between lg:items-center w-full">
                <Image
                  src="/images/timelySVG.svg"
                  alt="alt"
                  width={80}
                  height={80}
                />
                <div className="lg:items-center flex flex-col py-2">
                  <h1 className="xl:text-[24px] font-semibold">
                    Transparent Pricing
                  </h1>
                  <p className="lg:text-[14px] text-[12px] lg:text-center p-1">
                    No hidden fees, no last-minute surprises. What you see is
                    what you pay—always clear, always fair.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
