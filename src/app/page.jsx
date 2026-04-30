import Banner from "@/components/banner/Banner";
import TipsSection from "@/components/bottomsection/TipsSection";
import Extra from "@/components/extrasections/Extra";
import TopCards from "@/components/instructors/TopCards";
import TopRattingCard from "@/components/topcard/TopRattingCard";

export default function Home() {
  return (
   <div>
     <Banner></Banner>
     <TopRattingCard></TopRattingCard>
     <Extra></Extra>
     <TipsSection></TipsSection>
     <TopCards></TopCards>
     
   </div>
  );
}
