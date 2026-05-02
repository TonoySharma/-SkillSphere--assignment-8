import Banner from "@/components/banner/Banner";
import TipsSection from "@/components/faqsection/TipsSection";
import Extra from "@/components/extrasections/Extra";
import TopCards from "@/components/instructors/TopCards";
import TopRattingCard from "@/components/topcard/TopRattingCard";
import TrendingCourses from "@/components/trandingcourses/TrendingCourses";


export default function Home() {
  return (
   <div>
     <Banner></Banner>
     <TopRattingCard></TopRattingCard>
     <Extra></Extra>
     <TipsSection></TipsSection>
     <TopCards></TopCards>
     <TrendingCourses></TrendingCourses>

   </div>
  );
}
