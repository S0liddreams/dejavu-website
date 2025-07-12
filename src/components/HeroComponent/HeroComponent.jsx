import Header from "@/components/Header/Header";
import ClientFeeds from "../ImageCards/ClientsFeeds";
import Link from "next/link";

export default function HeroComponent() {
  return (
    <div className="lg:w-full bg-hero-image lg:h-[800px]      ">
      <div className=" w-full h-full bg-[#00000066] lg:px-[64px] lg:pb-[64px] lg:gap-[88px] ">
        <Header />
        <div className="lg:h-[584px]  lg:w-[1296px] bg-transparent ">
          <div className="lg:w-[746px] lg:h-[172px] lg:mt-[50px] lg:mb-2">
            <p className="xl:text-[72px] text-white">
              Moving Made Simple, Setup Made Perfect
            </p>
          </div>
          <div className="lg:w-full lg:h-[132px] lg:mt-[280px] bg-transparent">
            <div>
              <ClientFeeds />
            </div>
            <div className="lg:h-[48px] flex justify-between w-full bg-transparent mt-[20px]">
              <div className="">
                <p className="text-white text-[16px] lg:w-[740px] ">
                  Skip the overwhelm of moving with our trusted concierge
                  services. Professional furniture assembly, home organization,
                  and personalized support that turn your new space into a home
                  from day one
                </p>
              </div>

              <div className="lg:w-[150px] lg:h-[48px] lg:py-[12px] lg:pl-[12px] lg:pr-[4px] lg:pb-[12px] rounded-[100px] flex justify-between items-center text-[#171717]  bg-white">Contact Us
                <Link href=""><div className="bg-[#0550A1] w-[40px] h-[40px] rounded-[200px]"></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
