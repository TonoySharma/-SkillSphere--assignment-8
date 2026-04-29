import Banner from "@/components/banner/Banner";
import TopRattingCard from "@/components/topcard/TopRattingCard";

export default function Home() {
  return (
   <div className="text-2xl text-center p-5 ">
     <Banner></Banner>
     <TopRattingCard></TopRattingCard>
   </div>
  );
}
