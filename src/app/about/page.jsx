import Header from "@/components/Header/Header";
import WhatWeStandFor from "@/components/WhatWeStandFor/WhatWeStandFor";
import React from "react";

const About = () => {
  return (
    <div className="lg:w-full h-full py-[8px] px-[8px]">
      {/**Fist Section Of About page */}

      <div className="lg:h-[520px] h-full w-full bg-about-image rounded-[16px] lg:mb-[64px] mb-[40px] ">
        <div className="w-full h-full bg-[#00000066] rounded-[16px]">
          <div className="lg:px-[64px] px-[16px] text-[30px] flex flex-col lg:h-[448px]  h-[304px]">
            <Header />

            <div className="flex-1 flex items-center justify-center">
              <p className="lg:text-[60px] text-white font-medium text-center">
                About Us
              </p>
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

      <div className="lg:h-[272px] lg:py-[64px] lg:px-[72px] py-[40px] px-[20px] ">
        <div className="xl:w-[1296px] lg:h-[144px] grid lg:grid-cols-2  gap-[16px] mx-auto lg:gap-[8px]">
          <div className=" ">
            <p className="text-[#171717] font-medium lg:text-[48px] text-[24px]  ">
              Our Mission
            </p>
          </div>
          <div className="">
            <p className="text-[16px]  text-left text-[#525252]">
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
        <div className="h-[420px] lg:h-[556px] xl:w-[1296px] rounded-[16px] lg:p-[20px] bg-ourstory-image mx-auto"></div>
        <div className="xl:h-[576px] h-[1057px] md:h-full w-[295px] md:w-[595px]  lg:w-[700px] xl:w-[1076px] rounded-bl-[16px] rounded-br-[16px] lg:gap-[8px] pt-[16px] px-[16px]  lg:p-[24px] bg-[#054993] mx-auto">
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
                and to leave every space better than we found it
              </p>
            </div>
          </div>
        </div>
      </div>

      {/**MEET OUR TEAM */}

      <div className="h-full  lg:py-[64px] lg:px-[72px] py-[40px] px-[20px]m">
        <div className=" xl:w-[1296px] lg:h-[586px]">
          <div className="mx-auto w-fit">
            <p className="text-[#171717] text-center lg:text-[48px] font-medium">Meet Our Team</p>
            <p className="text-center text-[#525252]">Our team is made up of trained professionals with a passion for service and a commitment to excellence.</p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default About;
