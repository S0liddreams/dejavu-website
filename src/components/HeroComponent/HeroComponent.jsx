import Header from "@/components/Header/Header";
import ClientFeeds from "../ImageCards/ClientsFeeds";

export default function HeroComponent() {
  return (
    <div className="xl:w-full bg-hero-image h-screen bg-blue-300  xl:px-[64px] xl:pb-[64px] xl:gap-[88px]">
      <Header />
      <div className="xl:h-[584px]  xl:w-[1296px] bg-green-100">
        <div className="xl:w-[746px] xl:h-[172px] xl:mt-[45px] xl:mb-2">
          <p className="xl:text-[72px] text-white">
            Moving Made Simple, Setup Made Perfect
          </p>
        </div>
        <div className="xl:w-full xl:h-[132px] xl:mt-[280px] bg-red-100">
            <div>
                <ClientFeeds/>
            </div>
        </div>
      </div>
    </div>
  );
}
