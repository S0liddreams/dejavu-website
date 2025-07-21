import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full lg:h-[469px] bg-[#0550A1] lg:py-[64px] lg:px-[72px] rounded-[16px] mt-[8px]">
      <div className="lg:w-[1296px]  mx-auto">
        <div className="  h-[268px] lg:flex lg:flex-row justify-between lg:mt-[40px] items-center">
          <div className=" lg:gap-[26px] grid lg:w-[634px] h-fit">
            <div>
              <Image
                src="/images/dvjlogo.svg"
                alt="alt"
                width={168}
                height={72}
              />
            </div>
            <div className=" flex text-white lg:text-[14px] justify-between">
              <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
              <p>dejavu.moveinout@example.com</p>
              <p>(239) 555-0108</p>
            </div>
          </div>

          <div className="lg:w-[246px] lg:h-[119px] flex flex-row justify-between ">
            <div className=" h-[74px] grid gap-[28px] text-white ">
              <p>
                <Link href="href">About Us</Link>
              </p>
              <p>
                <Link href="href">Contact Us</Link>
              </p>
              <p>
                <Link href="href">Projects</Link>
              </p>
            </div>

            <div className=" grid text-white h-[70px] gap-[28px]">
              <p>
                <Link href="href">Privacy Policy</Link>
              </p>
              <p>
                <Link href="href">Terms of Use</Link>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:flex lg:flex-row justify-between text-white lg:h-[54px] border border-t-[#A3A3A3] border-x-0 border-b-0 gap-[32px] items-baseline-last">
          <div className=" h-[21px] lg:text-[14px] w-[223px] ">
            <p>© 2025 Dejavu. All rights reserved.</p>
          </div>

          <div className="flex flex-row justify-between w-[116px] items-baseline-last h-[20px] mt-[10px]">
            <div>
              <FaInstagram />
            </div>
            <div>
              <RiTwitterXFill />
            </div>
            <div>
              <LuFacebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
