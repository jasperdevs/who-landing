import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import ReportDeepDive from "@/components/ReportDeepDive";
import QuestionWall from "@/components/QuestionWall";
import HowItWorks from "@/components/HowItWorks";
import FollowStory from "@/components/FollowStory";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <ReportDeepDive />
        <QuestionWall />
        <HowItWorks />
        <FollowStory />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
