import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full lg:h-[469px] h-[603px] bg-[#0550A1]    py-[40px] px-[20px] lg:py-[64px] lg:px-[72px] rounded-[16px] mt-[8px]">
      <div className="bg-footer-image">
      <div className="xl:w-[1296px]  mx-auto ">
        <div className=" h-[410px] lg:h-[268px]  lg:flex lg:flex-row justify-between mt-[50px] lg:mt-[40px]  items-center">
          <div className=" lg:gap-[26px] gap-[40px] grid xl:w-[634px] lg:w-[534px] md:w-full min-w-[305px]  h-fit">
            <div>
              <Link href="/">
              <Image
                src="/images/HorizontalLogo.png"
                alt="alt"
                className="  lg:h-[88px] lg:w-[274px]  h-[56px] w-[174px]"
                width={168}
                height={72}
              />
              </Link>
            </div>
            <div className=" lg:flex text-white xl:text-[14px] lg:text-[12px] grid  text-[12px] md:text-[14px] gap-[16px] lg:gap-0   justify-between">
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              <p>dejavu.moveinout@example.com</p>
              <p>(239) 555-0108</p>
            </div>
          </div>

          <div className="xl:w-[246px] lg:w-[170px] md:w-[400px] w-[250px] xl:h-[119px] lg:h-[110px] flex flex-row justify-between mt-[50px] lg:mt-[10px] ">
            <div className=" xl:h-[74px] lg:h-[72px] grid gap-[28px] text-white xl:text-[14px] text-[12px] lg:text-[12px] font-medium">
              <p>
                <Link href="/about">About Us</Link>
              </p>
              <p>
                <Link href="/contactUs">Contact Us</Link>
              </p>
              <p>
                <Link href="/projects">Projects</Link>
              </p>
            </div>

            <div className=" flex flex-col font-medium text-white h-[70px] gap-[28px] xl:text-[14px] text-[12px] lg:text-[12px]">
              <p>
                <Link href="/privacy">Privacy Policy</Link>
              </p>
              <p>
                <Link href="/terms">Terms of Use</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row justify-between text-white lg:h-[54px]  border border-t-[#A3A3A3] border-x-0 border-b-0  lg:items-baseline-last">
          <div className=" lg:h-[21px] lg:text-[14px] text-[12px] items-center mt-[20px] ">
            <p>© 2025 Dejavu. All rights reserved.</p>
          </div>

          <div className="flex flex-row justify-between w-[116px]  items-center h-[20px] mt-[20px] lg:mt-[40px]">
            <div>
              <FaInstagram className="text-[16px]" />
            </div>
            <div>
              <RiTwitterXFill className="text-[16px]" />
            </div>
            <div className="border border-white w-[18px] h-[18px] rounded-[25%] p-[1%]">
              <LuFacebook className="text-[14px]" />
            </div>
          </div>
        </div>
      </div>
   
   </div> </div>
  );
};

export default Footer;
