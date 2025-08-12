import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProjectCard from "@/components/ProjectCards/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import projectData from "@/data/projectData";

const page = () => {
  return (
    <div className="main-container2 h-full w-full">
      <div className="lg:h-[520px] w-full h-[304px]">
        {/**Hero Section */}
        <div className="w-full lg:h-[448px] h-[260px]  bg-projects-image rounded-[16px]">
          <div className=" w-full h-full bg-[#00000066] lg:pb-[88px] flex flex-col px-[16px]  lg:gap-[88px] lg:px-[64px] rounded-[16px]">
            <Header />

            <div className="text-white h-[200px] px-[28px] gap-[8px] lg:px-0 lg:gap-[16px] flex flex-col text-center items-center">
              <p className="lg:text-[60px] text-[30px] font-medium">Projects</p>
              <p className="lg:text-[16px] text-[12px] lg:w-[636px]">
                From cozy apartments to full-family homes, we’ve helped clients
                move in, move out, and settle with confidence. Take a look at
                some of our recent transformations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/**Projects Section */}

      <div className="xl:h-[1004px] py-[40px] px-[20px]  lg:pt-[64px] lg:px-[72px] lg:pb-[128px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] lg:gap-[36px]">
          {projectData.map((item, index) => (
            <Link key={index} href={`/projects/${item.slug}`}>
              <ProjectCard
                image={item.image}
                title={item.title}
                tag={item.tag}
                bgColor={item.bgColor}
                textColor={item.textColor}
              />
            </Link>
          ))}
        </div>
      </div>

      {/**Need a similar service? */}
      <div className=" bg-similarProjectImg-image rounded-[16px]">
        <div className=" w-full h-full bg-[#00000066] py-[40px] px-[20px] lg:py-[64px] lg:px-[72px] lg:h-[282px] rounded-[16px] ">
          <div className="h-[190px] w-full lg:w-[904px] lg:h-[134px] py-[24px]  bg-[#FFFFFF] mx-auto rounded-[16px] lg:gap-[8px] lg:px-[40px] p-[24px]  lg:py-[24px]">
            <div className="lg:h-[48px]  bg-white gap-4 lg:gap-0 h-[152px] flex flex-col lg:flex-row justify-between w-full  ">
              <div className="leading-[150%] w-[279px] lg:w-[651px] ">
                <p className="lg:text-[30px] text-[20px] text-[#171717] font-medium lg:h-[36px]">
                  Need a similar service?
                </p>
                <p className="text-[#737373] mt-[10px] text-[12px]  md:text-[14px] w-[279px] md:w-[500px] lg:w-[610px]  xl:w-[651px] leading-[150%] ">
                  We can do the same for you. Whether you're moving in, moving
                  out, or just need an extra hand, our team is ready to help you
                  settle in stress-free.
                </p>
              </div>

              {/** Contact Us  */}

              <div className="z-50 xl:w-[150px] lg:mt-[20px] lg:w-[150px] w-[134px] h-[44px]  pl-[12px] lg:h-[48px] lg:pl-[12px] pr-[4px] rounded-[100px] flex justify-between items-center text-white font-medium bg-[#0550A1] text-[13px] md:text-[14px] xl:text-[16px] shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out group">
                Contact Us
                <Link href="/contactUs">
                  <div className=" bg-white lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] rounded-full text-[#0550A1] flex justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-black group-hover:shadow-lg">
                    <IoIosArrowRoundForward className="w-6 h-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
