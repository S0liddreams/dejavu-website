import HeroComponent from "@/components/HeroComponent/HeroComponent";
import Services from "@/components/OurServices/Services";





export default function Home() {
  return (
    <div className="lg:w-full lg:h-[800px] mx-0 min-w-[365px]     ">
      <HeroComponent/>
      <Services/>
    </div>
  );
}
