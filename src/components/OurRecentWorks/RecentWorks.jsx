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
    <div className="max-w-[1440px] lg:h-[706px] lg:px-[72px] py-[40px] px-[20px] md:py-[50px] lg:py-[64px] mx-auto">
      <div className="lg:h-[598px]">
        <div className="mx-auto lg:w-[746px] md:h-[122px] text-center">
          <p className=" md:text-[26px] text-[24px] lg:text-[48px] font-medium">Our Recent Works</p>
          <p className="lg:text-[16px] mt-4">
            From cozy apartments to full-family homes, we’ve helped clients move
            in, move out, and settle with confidence. Take a look at some of our
            recent transformations.
          </p>
        </div>

        <div className="relative h-full lg:h-[454px] xl:h-[524px] flex items-center justify-center ">
          <div className="relative z-10 grid grid-cols-1  gap-8 md:grid-cols-2 lg:flex lg:gap-6 xl:gap-10 py-10 max-w-[1440px] mx-auto px-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative w-[335px] lg:w-[340px] xl:w-[530px] h-[354px] lg:h-[300px] rounded-3xl overflow-hidden bg-cover bg-center group transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] hover:shadow-xl hover:-rotate-1 transform"
                style={{ backgroundImage: `url('${service.image}')` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-all duration-700 group-hover:from-black/60 group-hover:to-white/10"></div>

                {/* Title - Stylish badge */}
                <div className="absolute top-4 left-4 z-20 px-4 py-1 bg-black/40 text-white text-sm xl:text-xs rounded-full border border-white/20 shadow-sm">
                  {service.title}
                </div>

                {/* Description - Animated rise on hover */}
                <div className="absolute bottom-4 left-4 right-4 z-20 transition-all duration-500 group-hover:translate-y-[-4px]">
                  <p className="text-sm lg:text-[16px] xl:text-[24px] xl:w-[504px] text-white font-medium">
                    {service.description}
                  </p>
                </div>

                {/* Optional border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500 pointer-events-none"></div>

                
              </div>
            ))}
          </div>

          
        </div>
 <div className="group md:w-[181px] text-[14px]  md:text-[16px] mx-auto bg-[#0550A1] w-[160px] h-[44px] p-[4px] pb-[4px] pl-[12px] lg:h-[48px] lg:py-[12px] lg:pl-[12px] lg:pr-[4px] lg:pb-[12px] rounded-[100px] flex justify-between items-center text-white cursor-pointer">
          See All Projects
          <Link href="">
            <div className="lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] bg-white rounded-full text-[#0550A1] flex items-center justify-center transition-all duration-300 ease-in-out transform group-hover:scale-125 group-hover:bg-black group-hover:text-white group-hover:shadow-xl">
              <IoIosArrowRoundForward className="w-[20px] h-[20px]" />
            </div>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default RecentWorks;
