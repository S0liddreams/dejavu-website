import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const services = [
  {
    title: "Move-In Concierge",
    description: "Downtown Toronto Condo Unpacked & Ready in a Day",
    image: "/images/recentworks1.jpg", // Make sure this path exists
  },
  {
    title: "Furniture Assembly",
    description: "Modern IKEA Assembly for a Family Home in Mississauga",
    image: "/images/recentworks2.jpg",
  },
];

const RecentWorks = () => {
  return (
    <div className="max-w-[1440px] lg:h-[706px] lg:px-[72px] lg:py-[64px] mx-auto">
      <div className="lg:h-[598px]">
        <div className="mx-auto lg:w-[746px] lg:h-[122px] text-center">
          <p className="lg:text-[48px] font-medium">Our Recent Works</p>
          <p className="lg:text-[16px] mt-4">
            From cozy apartments to full-family homes, we’ve helped clients move
            in, move out, and settle with confidence. Take a look at some of our
            recent transformations.
          </p>
        </div>

        <div className="relative h-full lg:h-[524px] flex items-center justify-center">
          <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:flex lg:gap-2 xl:gap-8 py-10 max-w-[1440px] mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative w-[335px] lg:w-[240px] xl:w-[636px] h-[354px] lg:h-[300px] bg-cover bg-center rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 group"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000bb] to-[#00000066] rounded-2xl opacity-100 group-hover:from-[#00000099] group-hover:to-[#ffffff44] group-hover:opacity-60 transition-all duration-500 ease-in-out"></div>

                {/* Title - top-left */}
                <h1 className="absolute top-4 left-4 z-10 text-white bg-[#17171759] rounded-[100px] h-[30px] w-[129px] p-[6px] text-[20px] lg:text-[18px] xl:text-[12px] font-medium">
                  {service.title}
                </h1>

                {/* Description - bottom */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <p className="text-[12px] lg:text-[24px] text-white">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="xl:w-[150px] lg:w-[250px] w-[134px] h-[44px] p-[4px] pb-[4px] pl-[12px] lg:h-[48px] lg:py-[12px] lg:pl-[12px] lg:pr-[4px] lg:pb-[12px] rounded-[100px] flex justify-between items-center text-[#171717]  bg-white">
          Contact Us
          <Link href="">
            <div className="bg-[#0550A1] lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] rounded-[200px] text-white items-center flex">
              <IoIosArrowRoundForward className="w-[100px] h-[20px]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentWorks;
