"use client";

import React from "react";
import Footer from "@/components/Footer/Footer";
import Header2 from "@/components/Header2/Header2";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Breaadcrumbs from "../breadcrumbs/Breaadcrumbs";

const serviceTypes = [
  { label: "Service Type", value: "Move-In Concierge" },
  { label: "Client Type", value: "Busy Professional" },
  { label: "Duration", value: "1 Day (Approx. 8 hours)" },
  { label: "Location", value: "Toronto, Ontario (Downtown Core)" },
];

export default function ProjectComponent({ project }) {
  return (
    <div className="w-full h-full p-2">
      <div className="h-[748px] lg:pt-[8px] pt-[4px] px-[20px] pb-[40px] gap-[8px] lg:px-[72px]  lg:gap-[24px] flex flex-col">
        <Header2 />

        <div className=" relative w-full h-[833px] lg:h-[1000px] p-[24px] flex flex-col lg:gap-[8px] lg:py-[48px] lg:px-[40px]  rounded-[16px] bg-[#E6EEF6]">
          <div className="hidden lg:block absolute  left-0 bg-projectpost-image  h-[80%] transparent w-full"></div>
          <div className="  lg:hidden absolute top-[-100px]  left-[55px]  bg-projectpostSm-image  h-[70%] transparent w-[250px] md:w-full"></div>
          {/**Hero section */}
          <div className="lg:h-[737px] h-[757px] gap-[24px] flex flex-col lg:gap-[48px]  ">
            <div className="justify-center flex items-center ">
              <p className="lg:w-[836px] lg:text-[48px] text-[24px] w-[287px]  text-[#171717] font-medium text-center ">
                {project.title}
              </p>
            </div>

            <div className="lg:h-[480px] h-[640px] gap-[24px] flex flex-col lg:gap-[30px] z-50">
              <div className="w-full h-full rounded-[16px] object-cover">
                <Image
                  className="w-full h-[480px] rounded-[16px] object-cover"
                  src={project.image}
                  alt="alt"
                  width={1216}
                  height={480}
                />
              </div>

              <div className="w-full z-50  flex flex-wrap justify-center lg:justify-between gap-x-[24px] gap-y-[24px] lg:flex-nowrap lg:gap-[48px] lg:h-[53px]">
                <div className="w-[45%] flex flex-col gap-[8px] items-center text-center lg:w-auto">
                  <p className="text-[#0550A1] font-medium text-[14px] lg:text-[16px]">
                    Service Type
                  </p>
                  <p className="font-medium text-[#171717] text-[12px] lg:text-[14px]">
                    {project.serviceType}
                  </p>
                </div>

                <div className="w-[45%] flex flex-col gap-[8px] items-center text-center lg:w-auto">
                  <p className="text-[#0550A1] font-medium text-[14px] lg:text-[16px]">
                    Client Type
                  </p>
                  <p className="font-medium text-[#171717] text-[12px] lg:text-[14px]">
                    {project.clientType}
                  </p>
                </div>

                <div className="w-[45%] flex flex-col gap-[8px] items-center text-center lg:w-auto">
                  <p className="text-[#0550A1] font-medium text-[14px] lg:text-[16px]">
                    Duration
                  </p>
                  <p className="font-medium text-[#171717] text-[12px] lg:text-[14px]">
                    {project.duration}
                  </p>
                </div>

                <div className="w-[45%] flex flex-col gap-[8px] items-center text-center lg:w-auto">
                  <p className="text-[#0550A1] font-medium text-[14px] lg:text-[16px]">
                    Location
                  </p>
                  <p className="font-medium text-[#171717] text-[12px] lg:text-[14px]">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>

      {/**Overview */}

      <div className="w-full lg:h-[304px] h-[401px] lg:mt-[220px] lg:py-[64px] py-[40px] px-[20px] lg:px-[72px] flex flex-col gap-[8px] lg:gap-[8px]">
        <div className="lg:h-[176px] h-[321px] md:h-[270px] gap-[16px] lg:gap-0   flex-col flex lg:flex-row ">
          <div className="  xl:w-3/5 lg:w-1/3 ">
            <p className="text-[#171717] lg:text-[36px] text-[20px] font-medium">
              Overview
            </p>
          </div>
          <div className=" xl:w-4/5 lg:w-2/3 ">
            <div className="">
              <p className="lg:w-[645px]  lg:text-[16px] text-[14px] text-[#525252]">
                {project.overView}
              </p>

              {/**  <p className="mt-2  lg:text-[16px] text-[14px] text-[#525252]">
                Within just 8 hours, we managed a full-scale setup that included
                unpacking all personal belongings, arranging kitchen essentials
                for easy access, organizing wardrobes for a seamless daily
                routine, and strategically placing furniture to create a
                welcoming, livable environment. By the time we wrapped up, the
                condo felt like home—neat, organized, and move-in ready.
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/**images section */}

      <div className="py-[8px] px-[20px] lg:py-[32px] lg:px-[72px] lg:h-[728px] flex flex-col gap-[8px]">
        <div className="flex flex-col gap-[20px] lg:gap-[24px] lg:h-[664px]">
          {/* Top two images side by side on large screens, stacked on small screens */}
          <div className="flex flex-col lg:flex-row lg:justify-center gap-[16px] lg:gap-[24px]">
            <div className="w-full h-[320px] lg:w-3/5 xl:w-3/4 object-cover rounded-[16px]">
              <Image
                className="w-full h-[320px]  lg:w-[946px] object-cover rounded-[16px]"
                src={project.pimage1}
                alt="alt"
                width={1046}
                height={320}
              />
            </div>
            <div className="w-full h-[320px] lg:w-2/5 xl:w-2/4 object-cover rounded-[16px]">
              <Image
                className="w-full h-[320px]  lg:w-[628px] object-cover rounded-[16px]"
                src={project.pimage2}
                alt="alt"
                width={746}
                height={320}
              />
            </div>
          </div>

          {/* Bottom three images in one column on mobile, two columns on tablet, row on large screen */}
          <div className="grid grid-cols-1 lg:flex gap-[16px] lg:gap-[14px] xl:gap-[24px] justify-center">
            <div className="w-full h-[320px] lg:1/3  xl:w-1/3 object-cover rounded-[16px]">
              <Image
                className="w-full h-[320px] lg:w-[385px] xl:w-[562px]  object-cover rounded-[16px]"
                src={project.pimage3}
                alt="alt"
                width={546}
                height={320}
              />
            </div>

            <div className="w-full h-[320px] lg:1/3 xl:w-1/3  object-cover rounded-[16px]">
              <Image
                className="w-full h-[320px] lg:w-[385px] xl:w-[562px]  object-cover rounded-[16px]"
                src={project.pimage4}
                alt="alt"
                width={546}
                height={320}
              />
            </div>

            <div className="w-full h-[320px] lg:1/3 xl:w-1/3  object-cover rounded-[16px]">
              <Image
                className="w-full h-[320px] lg:w-[385px] xl:w-[562px]  object-cover rounded-[16px]"
                src={project.pimage5}
                alt="alt"
                width={546}
                height={320}
              />
            </div>
          </div>
        </div>
      </div>

      {/**Executions */}

      <div className="w-full lg:h-[360px] h-[401px] lg:py-[64px] py-[40px] px-[20px] lg:px-[72px] flex flex-col gap-[8px] lg:gap-[8px]">
        <div className="lg:h-[176px] h-[321px] md:h-[270px] gap-[16px] lg:gap-0   flex-col flex lg:flex-row ">
          <div className="  xl:w-3/5 lg:w-1/3 ">
            <p className="text-[#171717] lg:text-[36px] text-[20px] font-medium">
              Executions
            </p>
          </div>
          <div className=" xl:w-4/5 lg:w-2/3  items-center ">
            <div className=" flex flex-col justify-around gap-[12px] ">
              <div className="flex flex-row gap-[10px] items-center ">
                <Image
                  src="/images/executionsBulletsImage.png"
                  alt="alt"
                  width={6}
                  height={24}
                />
                <div>
                  <p className="lg:w-[645px] lg:text-[16px] text-[14px] text-[#525252]">
                    {project.executions1}
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  src="/images/executionsBulletsImage.png"
                  alt="alt"
                  width={6}
                  height={24}
                />

                <div>
                  <p className=" lg:text-[16px] text-[14px] text-[#525252]">
                    {project.executions2}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  src="/images/executionsBulletsImage.png"
                  alt="alt"
                  width={6}
                  height={24}
                />
                <div>
                <p className="  lg:text-[16px] text-[14px] text-[#525252]">
                  {project.executions3}
                </p></div>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  src="/images/executionsBulletsImage.png"
                  alt="alt"
                  width={6}
                  height={24}
                />
                <div>
                <p className=" lg:text-[16px] text-[14px] text-[#525252]">
                  {project.executions4}
                </p></div>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <Image
                  src="/images/executionsBulletsImage.png"
                  alt="alt"
                  width={6}
                  height={24}
                />
                <div>
                <p className=" lg:text-[16px] text-[14px] text-[#525252]">
                  {project.executions5}
                </p></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Need a similar service? */}
      <div className="p-2">

      <div className=" bg-similarProjectImg-image rounded-[16px] ">
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
      </div></div>

      <Footer />
    </div>
  );
}
