"use client";
import Breaadcrumbs from "@/components/breadcrumbs/Breaadcrumbs";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ServiceOptions from "@/components/ServiceOptions/ServiceOptions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuFacebook } from "react-icons/lu";
import { RiTiktokFill, RiTwitterXFill } from "react-icons/ri";
import dynamic from "next/dynamic";


const MapComponent = dynamic(
  () => import('../../components/MapComponent/MapComponent').then((mod) => mod.default),
  { ssr: false }
);

const Contact = () => {
  return (
    <div className="main-container lg:h-[520px] h-[304px] ">
      <div className="lg:h-[448px] h-[260px] bg-contact-image rounded-[16px] ">
        <div className=" w-full h-full bg-[#00000066]  lg:gap-[88px] lg:px-[64px] lg:pb-[64px] rounded-[16px] flex flex-col">
          <Header />

          <div className="xl:w-[1296px] gap-[16px] lg:h-[200px] mx-auto ">
            <p className="lg:text-[60px] text-center text-white ">Contact Us</p>
            <div className="w-fit mx-auto">
              <Breaadcrumbs />
            </div>
          </div>
        </div>
      </div>

      {/** Contact Form */}

      <div className="lg:h-[753px] container lg:gap-[8px] ">
        <div className="xl:w-[1296px] lg:h-[625px] lg:flex lg:flex-row mx-auto lg:gap-[54px]">
          <div className="xl:w-[824px] lg:h-[625px] gap-[40px] flex flex-col  ">
            <div>
              <p className="lg:text-[48px] text-[#171717] font-medium">
                Need Help? We’re Here For You
              </p>
              <p className="text-[#525252] lg:text-[16px] ">
                Let us know how we can assist you. Whether it’s a booking
                inquiry, partnership request, or just a quick question, we’re
                here to help; one message away.
              </p>
            </div>

            <div className="lg:h-[463px] ">
              <div className="flex flex-col lg:gap-[24px] lg:h-[24px]">
                <div className="lg:flex lg:flex-row gap-[24px]">
                  <div className="xl:w-[400px] w-full  lg:h-[84px] flex-col flex gap-[8px]">
                    <div>Name</div>
                    <input
                      className="lg:h-[56px]  lg:py-[22px] shadow-[10px] lg:px-[20px] border-1 rounded-[12px] border-[#E5E5E5] text-[#737373]"
                      type="text"
                    />
                  </div>
                  <div className="xl:w-[400px] w-full  lg:h-[84px] flex-col flex gap-[8px]">
                    <div>Phone number (Optional)</div>
                    <input
                      className="lg:h-[56px]  lg:py-[22px] shadow-[10px] lg:px-[20px] border-1 rounded-[12px] border-[#E5E5E5] text-[#737373]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="lg:flex lg:flex-row gap-[24px]">
                  <div className="xl:w-[400px] w-full lg:h-[84px] flex-col flex gap-[8px]">
                    <div>Email</div>
                    <input
                      className="lg:h-[56px] w-full lg:py-[22px] shadow-[10px] lg:px-[20px] border-1  rounded-[12px] border-[#E5E5E5] text-[#737373]"
                      type="text"
                    />
                  </div>
                  <div className="xl:w-[400px] w-full  lg:h-[84px] flex-col flex gap-[8px]">
                    <div>Service</div>
                    <ServiceOptions />
                  </div>
                </div>
                <div className="w-full lg:h-[173px] flex-col flex gap-[8px]">
                  <div>Message</div>
                  <textarea
                    className="lg:h-[144px] w-full lg:py-[22px] shadow-[10px] lg:px-[20px] border-1 rounded-[12px] border-[#E5E5E5] text-[#737373]"
                    type="text"
                  >
                    {" "}
                  </textarea>
                </div>
              </div>
            </div>

            <div className="lg:h-[48px] lg:flex lg:flex-row lg:gap-[40px]">
              <p className="text-[#737373] text-[14px] lg:w-[611px]">
                By clicking “Submit,” you agree to be contacted by our team via
                phone or text regarding your inquiry. You also accept our
                <span className="text-[#171717]">Privacy Policy</span> and{" "}
                <span className="text-[#171717]">Terms of Use</span> .
              </p>
              <div className="z-50 xl:w-[173px] lg:w-[150px] w-[134px] h-[44px] p-[4px] pl-[12px] lg:h-[48px] lg:pl-[12px] lg:pr-[4px] rounded-[100px] flex justify-between items-center text-white font-medium  bg-[#0550A1] text-[13px] md:text-[14px] xl:text-[16px] shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out group">
                Send Message
                <Link href="/contactUs">
                  <div className=" lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] rounded-full text-white flex justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-110 bg-white group-hover:bg-black group-hover:shadow-lg">
                    <IoIosArrowRoundForward className="w-6 h-6 text-[#0550A1]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="xl:w-[620px] lg:p-[24px] gap-[8px] bg-[#054993] rounded-[16px]">
            <div className=" flex flex-col gap-[12px]">
              <div className="flex flex-row bg-[#043972] lg:h-[81px] rounded-[12px] lg:p-[16px] gap-[16px]">
                <Image
                  src="/images/call.svg"
                  alt="alt"
                  width={24}
                  height={24}
                />

                <div className="text-white text-[14px]">
                  <p>Phone</p>
                  <p>(239) 555-0108</p>
                </div>
              </div>
              <div className="flex flex-row bg-[#043972] lg:h-[81px] rounded-[12px] lg:p-[16px] gap-[16px]">
                <Image
                  src="/images/messages-2.svg"
                  alt="alt"
                  width={24}
                  height={24}
                />

                <div className="text-white text-[14px]">
                  <p>SMS/WhatsApp</p>
                  <p>(239) 555-0108</p>
                </div>
              </div>
              <div className="flex flex-row bg-[#043972] lg:h-[81px] rounded-[12px] lg:p-[16px] gap-[16px]">
                <Image src="/images/sms.svg" alt="alt" width={24} height={24} />

                <div className="text-white text-[14px]">
                  <p>Email</p>
                  <p>dejavu.moveinout@example.com</p>
                </div>
              </div>
              <div className="flex flex-row bg-[#043972] lg:h-[81px] rounded-[12px] lg:p-[16px] gap-[16px]">
                <Image
                  src="/images/location.svg"
                  alt="alt"
                  width={24}
                  height={24}
                />

                <div className="text-white text-[14px]">
                  <p>Location</p>
                  <p>2972 Westheimer Rd. Santa, Illinois 85486 </p>
                </div>
              </div>
              <div className="flex flex-row bg-[#043972] lg:h-[81px] rounded-[12px] lg:p-[16px] gap-[16px]">
                <Image
                  src="/images/clock12.svg"
                  alt="alt"
                  width={24}
                  height={24}
                />

                <div className="text-white text-[14px]">
                  <p>Work Hours</p>
                  <p>Mon -Fri (9:00am - 6:00pm)</p>
                </div>
              </div>
              
              <div className="lg:h-[75px] pt-[10px] border-t-2 border-[#D4D4D4] text-white">
                <p className="lg:text-[18px]">Stay connected</p>

                <div className="flex flew-row gap-[8px] items-center  cursor-pointer ">
                  <div className="rounded-[200px] lg:w-[34px] lg:h-[34px] bg-[#043972]  flex-col items-center flex  gap-[8px]">
                    <FaInstagramSquare className="text-[14px] h-[89px] w-[16px]" />
                  </div>
                  <div className="rounded-[200px] lg:w-[34px] lg:h-[34px] bg-[#043972]  flex-col items-center flex  gap-[8px]">
                    <RiTwitterXFill className="text-[14px] h-[89px] w-[16px] " />
                  </div>
                  <div className="rounded-[200px] lg:w-[34px] lg:h-[34px] bg-[#043972]  flex-col items-center flex  gap-[8px]">
                    <LuFacebook className="text-[14px] h-[89px] w-[16px]" />
                  </div>
                  <div className="rounded-[200px] lg:w-[34px] lg:h-[34px] bg-[#043972]  flex-col items-center flex  gap-[8px]">
                    <RiTiktokFill className="text-[14px] h-[89px] w-[16px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
        {/**Map Component */}
      <div className="container">
      <h1 className="text-xl font-bold  mb-4">My Map</h1>
      <MapComponent className="rounded-[16px]"/>
    </div>
      <Footer/>
    </div>
  );
};

export default Contact;
