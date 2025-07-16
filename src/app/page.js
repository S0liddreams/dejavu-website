import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import RecentWorks from "@/components/OurRecentWorks/RecentWorks";
import Services from "@/components/OurServices/Services";
import Team from "@/components/Team/Team";





export default function Home() {
  return (
    <div className="lg:w-full lg:h-screen mx-0 min-w-[365px]     ">
      <HeroComponent/>
      <Services/>
      <Team/>
      <HowItWorks/>
      <RecentWorks/>
      <CustomerExperience/>
    </div>
  );
}
