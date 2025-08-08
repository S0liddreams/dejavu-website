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
  () =>
    import("../../components/MapComponent/MapComponent").then(
      (mod) => mod.default
    ),
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

      <div className=" w-full lg:py-[64px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className=" mx-auto flex flex-col lg:flex-row gap-8">
          {/* Left Form Side */}
          <div className="w-full lg:w-2/3 flex flex-col gap-10">
            <div>
              <p className="text-[24px] w-[270px] md:w-auto md:text-4xl text-[#171717] font-medium">
                Need Help? We’re Here For You
              </p>
              <p className="text-[#525252] mt-2 text-base md:text-lg">
                Let us know how we can assist you. Whether it’s a booking
                inquiry, partnership request, or just a quick question, we’re
                here to help; one message away.
              </p>
            </div>

            {/* Form */}
            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label>Name</label>
                  <input
                    type="text"
                    className="h-14 px-4 border rounded-lg border-[#E5E5E5] text-[#737373]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>Phone number (Optional)</label>
                  <input
                    type="text"
                    className="h-14 px-4 border rounded-lg border-[#E5E5E5] text-[#737373]"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label>Email</label>
                  <input
                    type="text"
                    className="h-14 px-4 border rounded-lg border-[#E5E5E5] text-[#737373]"
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label>Service</label>
                  <div className="">
                    <ServiceOptions />
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label>Message</label>
                <textarea
                  className="h-36 px-4 py-3 border rounded-lg border-[#E5E5E5] text-[#737373]"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
            </div>

            {/* Disclaimer & Button */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <p className="text-[#737373] text-sm lg:max-w-xl">
                By clicking “Submit,” you agree to be contacted by our team via
                phone or text regarding your inquiry. You also accept our{" "}
                <span className="text-[#171717]">Privacy Policy</span> and{" "}
                <span className="text-[#171717]">Terms of Use</span>.
              </p>

              <div className="flex items-center gap-2 bg-[#0550A1] text-white rounded-full px-4 py-2 shadow-md hover:shadow-xl transition-all text-sm md:text-base">
                Send Message
                <Link href="/contactUs">
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-black transition-all">
                    <IoIosArrowRoundForward className="text-[#0550A1]" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Info Box */}
          <div className="w-full lg:w-1/3 bg-[#054993] rounded-2xl p-6 lg:p-[10px] xl:p-6 flex flex-col gap-4">
            {[
              { icon: "call", label: "Phone", value: "(239) 555-0108" },
              {
                icon: "messages-2",
                label: "SMS/WhatsApp",
                value: "(239) 555-0108",
              },
              {
                icon: "sms",
                label: "Email",
                value: "dejavu.moveinout@example.com",
              },
              {
                icon: "location",
                label: "Location",
                value: "2972 Westheimer Rd. Santa, Illinois 85486",
              },
              {
                icon: "clock12",
                label: "Work Hours",
                value: "Mon -Fri (9:00am - 6:00pm)",
              },
            ].map(({ icon, label, value }, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-[#043972] p-4 rounded-xl"
              >
                <Image
                  src={`/images/${icon}.svg`}
                  alt={label}
                  width={24}
                  height={24}
                />
                <div className="text-white text-sm">
                  <p>{label}</p>
                  <p className="lg:text-[12px] xl:text-[14px]">{value}</p>
                </div>
              </div>
            ))}

            <div className="border-t border-[#D4D4D4] pt-4 text-white mt-4">
              <p className="text-base font-medium mb-2">Stay connected</p>
              <div className="flex gap-2">
                <div className="w-11 h-11 rounded-full bg-[#043972] flex items-center justify-center">
                  <FaInstagramSquare className="text-white" />
                </div>
                <div className="w-11 h-11 rounded-full bg-[#043972] flex items-center justify-center">
                  <RiTwitterXFill className="text-white" />
                </div>
                <div className="w-11 h-11 rounded-full bg-[#043972] flex items-center justify-center">
                  <LuFacebook className="text-white" />
                </div>
                <div className="w-11 h-11 rounded-full bg-[#043972] flex items-center justify-center">
                  <RiTiktokFill className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**Map Component */}
      <div className="lg:py-[64px] lg:px-[72px] py-[40px] px-[20px]">
        <MapComponent className="rounded-[16px]" />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
