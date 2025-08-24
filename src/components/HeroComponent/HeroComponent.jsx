import Header from "@/components/Header/Header";
import ClientFeeds from "../ImageCards/ClientsFeeds";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroComponent() {
  return (
    <div className="lg:w-full bg-hero-image h-[620px]  lg:h-[720px] rounded-[16px]  ">
      
      <div className=" w-full h-full flex flex-col bg-[#00000066]  lg:gap-[60px] lg:px-[64px] lg:pb-[64px] rounded-[16px]">
        <Header />
        <div className="lg:h-[284px]  lg:w-full  h-[608px] bg-transparent p-[16px] lg:px-[0px]  flex flex-col gap-[115px] lg:gap-[140px]  ">
          <div className="lg:w-[746px] lg:h-[172px] w-[335px] mt-[50px] ">
            <p className="xl:text-[72px] lg:text-[50px] text-[30px] text-white font-medium leading-[120%]">
              Moving Made Simple, Setup Made Perfect
            </p>
          </div>
          <div className="lg:w-full lg:h-[132px] h-[228px] bg-transparent">
            <div className="">
              <ClientFeeds />
            </div>
            <div className="lg:h-[48px] h-[152px] flex flex-col lg:flex-row justify-between w-full bg-transparent mt-[20px]">
              <div className="leading-[150%]">
                <p className="text-white lg:text-[16px] text-[14px] w-[335px] md:w-[400px] lg:w-[710px]  xl:w-[740px] leading-[150%] ">
                  Skip the overwhelm of moving with our trusted concierge
                  services. Professional furniture assembly, home organization,
                  and personalized support that turn your new space into a home
                  from day one
                </p>
              </div>

              {/** Contact Us  */}

              <div className="z-50 xl:w-[150px] lg:w-[150px] w-[134px] h-[44px] p-[4px] pl-[12px] lg:h-[48px] lg:pl-[12px] lg:pr-[4px] rounded-[100px] flex justify-between items-center text-[#171717] font-medium bg-white text-[13px] md:text-[14px] xl:text-[16px] shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out group">
                Contact Us
                <Link href="/contactUs">
                  <div className="bg-[#0550A1] lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] rounded-full text-white flex justify-center items-center transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-black group-hover:shadow-lg">
                    <IoIosArrowRoundForward className="w-6 h-6" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
