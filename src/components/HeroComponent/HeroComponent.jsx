import Header from "@/components/Header/Header";
import ClientFeeds from "../ImageCards/ClientsFeeds";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HeroComponent() {
  return (
    <div className="lg:w-full bg-hero-image lg:h-[800px] h-[748px]  ">
      <div className=" w-full h-full bg-[#00000066]  lg:gap-[88px] lg:px-[64px] lg:pb-[64px] ">
        <Header />
        <div className="lg:h-[584px]  lg:w-full  h-[608px] bg-transparent p-[16px]  flex flex-col justify-between ">
          <div className="lg:w-[746px] lg:h-[172px] w-[335px] mt-[50px] lg:mb-2">
            <p className="lg:text-[72px] text-[30px] text-white">
              Moving Made Simple, Setup Made Perfect
            </p>
          </div>
          <div className="lg:w-full lg:h-[132px] h-[228px] mt-[230px] bg-transparent">
            <div className="">
              <ClientFeeds />
            </div>
            <div className="lg:h-[48px] h-[152px] flex flex-col lg:flex-row justify-between w-full bg-transparent mt-[20px]">
              <div className="">
                <p className="text-white lg:text-[16px] text-[14px] xl:w-[740px] ">
                  Skip the overwhelm of moving with our trusted concierge
                  services. Professional furniture assembly, home organization,
                  and personalized support that turn your new space into a home
                  from day one
                </p>
              </div>


              {/** Contact Us  */}

              <div className="xl:w-[150px] lg:w-[250px] w-[134px] h-[44px] p-[4px] pb-[4px] pl-[12px] lg:h-[48px] lg:py-[12px] lg:pl-[12px] lg:pr-[4px] lg:pb-[12px] rounded-[100px] flex justify-between items-center text-[#171717]  bg-white">Contact Us
                <Link href=""><div className="bg-[#0550A1] lg:w-[40px] lg:h-[40px] w-[36px] h-[36px] rounded-[200px] text-white items-center flex">
                  <IoIosArrowRoundForward className="w-[100px] h-[20px]" /></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
