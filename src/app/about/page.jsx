import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import WhatWeStandFor from "@/components/WhatWeStandFor/WhatWeStandFor";
import Image from "next/image";
import React from "react";

const teamMembers = [
  {
    name: "Ralph Edwards",
    title: "Operations Manager",
    image: "/images/Team2.jpg",
  },
  {
    name: "Courtney Henry",
    title: "Operations Manager",
    image: "/images/Team32.jpg",
  },
  {
    name: "Cameron Williamson",
    title: "Digital Bookings & Scheduling Assistant",
    image: "/images/Team3.jpg",
  },
];

const About = () => {
  return (
    <div className="lg:w-full h-full py-[8px] px-[8px]">
      {/**Fist Section Of About page */}

      <div className="lg:h-[520px] h-full w-full bg-about-image rounded-[16px] lg:mb-[64px] mb-[40px] ">
        <div className="w-full h-full rounded-[16px]">
          <div className=" w-full h-full bg-[#00000066]  lg:gap-[88px] lg:px-[64px] lg:pb-[64px] rounded-[16px]">
            <div className=" text-[30px] flex flex-col lg:h-[448px]  h-[304px]">
              <Header />

              <div className="flex-1 flex items-center justify-center">
                <p className="lg:text-[60px] text-white font-medium text-center">
                  About Us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:py-[64px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className="xl:w-[1296px] lg:px-[72px] px-[16px] mx-auto">
          <p className="font-medium lg:text-[30px] min-w-[303px] text-[18px] text-center leading-[150%] text-black">
            We deliver{" "}
            <span className="text-[#0550A1]">concierge-level service </span>for
            anyone who wants more than just boxes dropped at the door. Our team
            provides{" "}
            <span className="text-[#0550A1]">
              {" "}
              full-service unpacking, furniture assembly, move-out support, and
              detailed add-ons{" "}
            </span>{" "}
            that take the chaos out of transition and turn empty rooms into
            livable homes.
          </p>
        </div>
      </div>

      {/**Our Mission */}

      <div className="lg:h-[320px] lg:py-[68px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className="xl:w-[1296px] xl:h-[144px] grid lg:flex lg:flex-row  gap-[16px] mx-auto lg:gap-[48px]">
          <div className="xl:w-3/5 lg:w-1/3">
            <p className="text-[#171717] font-medium xl:text-[48px] lg:text-[34px] text-[24px]  ">
              Our Mission
            </p>
          </div>
          <div className="xl:w-4/5 lg:w-2/3">
            <p className="text-[16px] lg:text-[18px]  xl:w-[655px]  leading-[150%]  lg:text-left text-[#525252]">
              We’re on a mission to redefine the moving experience by turning
              one of life’s most stressful moments into a seamless, supportive,
              and even enjoyable transition. We are committed to providing
              premium yet affordable concierge services, ranging from move-in
              and move-out assistance to expert furniture assembly and
              thoughtful home setup that meet the diverse needs of homeowners,
              busy professionals, families, students, and newcomers across
              Ontario.
            </p>
          </div>
        </div>
      </div>

      {/**WHAT WE STAND FOR  */}

      <div className="lg:h-[656px] lg:py-[64px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className="lg:h-[528px] flex flex-col lg:gap-[48px] gap-[30px] mx-auto">
          <div className="mx-auto w-fit">
            <p className=" text-[#171717] lg:text-[48px] text-[24px] text-center font-medium">
              What We Stand For
            </p>
            <p className="text-[#525252] text-[14px] lg:text-[16px] lg:w-[636px] text-center">
              Our values guide how we serve our clients reflecting who we are,
              how we work, and the care we bring to every home we touch.
            </p>
          </div>

          <div className="">
            <WhatWeStandFor />
          </div>
        </div>
      </div>

      {/**OUR STORY */}
      <div className="h-full lg:py-[64px] lg:px-[72px] py-[40px] px-[20px]  ">
        <div className="h-full lg:h-[556px] xl:w-[1296px] rounded-[16px] lg:p-[20px] bg-ourstory-image mx-auto"></div>

        {/** when acivating the algorithym  Return xl hight to 510px , them Md Hight to 730px which was previously usef oft lg-screen hight as well, then sm-screen hight to 1230px */}
        <div className="xl:h-[470px]  h-[1030px] md:h-[580px] lg:h-[630px]  w-[295px] md:w-[595px]  lg:w-[700px] xl:w-[1076px] rounded-bl-[16px] rounded-br-[16px] lg:gap-[8px] pt-[16px] px-[16px]  lg:p-[24px] bg-[#054993] mx-auto">
          <div className=" flex flex-col gap-[20px] xl:gap-[16px] h-[610px]  xl:w-[1028px] ">
            <div>
              <p className="text-[#FFFFFF] text-[24px] lg:text-[48px] font-medium">
                Our Story
              </p>
            </div>
            <div className="text-[#FFFFFF] space-y-4  xl:space-y-8">
              <p className="lg:text-[16px] text-[14px] leading-[150%] text-[#FFFFFF] ">
                Dejavu Move-In-Out was born out of a simple realization. Moving
                isn't just about changing locations, it's about rebuilding
                comfort, routine, and a sense of home. Our founder, once a
                newcomer navigating the overwhelming chaos of relocation,
                discovered firsthand how draining and disorganized the process
                could be. After struggling to unpack boxes alone, assemble
                furniture with missing tools, and balance the demands of a new
                job, the idea took root: what if there was a service that didn’t
                just move your things, but helped you feel moved in?
              </p>
              <p>
                What started as a one-person effort to assist friends and family
                in 2022, quickly evolved into a full-service concierge brand
                built to serve a much wider community of busy professionals,
                students, families, and seniors across Ontario. Today, Dejavu
                Move-In-Out is more than just a helping hand; it's a trusted
                partner in transition. With a growing team of vetted experts and
                a mission rooted in empathy and efficiency, we pride ourselves
                on offering personalized, reliable services that turn empty
                rooms into functional, welcoming spaces.
              </p>
              <p>
                We've helped hundreds of clients settle in faster, move out
                cleaner, and avoid the all-too-familiar stress that comes with
                relocation. And while every move is different, our promise
                remains the same: to treat each project like it’s our own home,
                and to leave every space better than we found it.
              </p>
            </div>
            {/**   <div className="w-full grid grid-cols-2 gap-[28px] lg:flex lg:flex-row lg:justify-between lg:gap-[16px] text-white">
              <div className="border-l border-white px-[15px] flex flex-col gap-[8px] w-[150px]  lg:w-[227px]">
                <p className="text-[24px] lg:text-[40px]">2k+</p>
                <p className="xl:text-[14px] text-[12px]">Satisfied Clients</p>
              </div>
              <div className="border-l border-white px-[15px] flex flex-col gap-[8px]  lg:w-[227px]">
                <p className="text-[24px] lg:text-[40px]">10k+</p>
                <p className="xl:text-[14px] text-[12px]">Moving Tasks</p>
              </div>
              <div className="border-l border-white px-[15px] flex flex-col gap-[8px] w-[150px]   lg:w-[227px]">
                <p className="text-[24px] lg:text-[40px]">5k+</p>
                <p className="xl:text-[14px] text-[12px]">
                  Furniture Assemblies
                </p>
              </div>
              <div className="border-l border-white px-[15px] flex flex-col gap-[8px] lg:w-[227px]">
                <p className="text-[24px] lg:text-[40px]">7k+</p>
                <p className="xl:text-[14px] text-[12px]">Add-ons</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/**MEET OUR TEAM */}

      <div className="h-[1295px] lg:h-[778px]  lg:py-[64px] lg:px-[72px] py-[40px] px-[20px]  ">
        <div className=" xl:w-[1296px] lg:h-[586px] flex flex-col justify-between mx-auto  gap-[30px] ">
          <div className="mx-auto w-fit">
            <p className="text-[#171717] text-center lg:text-[48px] text-[24px] font-medium">
              Meet Our Team
            </p>
            <p className="text-center text-[14px] xl:text-[16px] xl:w-[600px]  text-[#525252]">
              Our team is made up of trained professionals with a passion for
              service and a commitment to excellence.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            {teamMembers.map((member, index) => {
              const { name, title, image } = member;
              return (
                <div
                  key={index}
                  className="relative h-[335px]  lg:w-[280px]  xl:w-[416px] lg:h-[416px] rounded-[16px] overflow-hidden items-center bg-cover bg-center "
                  style={{ backgroundImage: `url(${image})` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 rounded-[16px] bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10"></div>

                  {/* Content */}
                  <div className="w-full h-full p-[20px] gap-[8px] flex flex-col justify-end relative z-20">
                    <div className="text-white z-50">
                      <p className="text-[20px] xl:text-[24px] font-medium">
                        {name}
                      </p>
                      <p className="xl:text-[14px] text-[12px]">{title}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
