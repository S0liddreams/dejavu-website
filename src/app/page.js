import CustomerExperience from "@/components/CustomerExperience/CustomerExperience";
import Footer from "@/components/Footer/Footer";
import FrequentQuestions from "@/components/FrequentQuestions/FrequentQuestions";
import HeroComponent from "@/components/HeroComponent/HeroComponent";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import RecentWorks from "@/components/OurRecentWorks/RecentWorks";
import Services from "@/components/OurServices/Services";
import Team from "@/components/Team/Team";





export default function Home() {
  return (
    <div className="  min-w-[365px] mx-auto  py-[8px] px-[8px] ">
      <HeroComponent/>
      <Services/>
      <Team/>
      <HowItWorks/>
      <RecentWorks/>
      <CustomerExperience/>
      <FrequentQuestions/>
      <Footer/>
    </div>
  );
}
