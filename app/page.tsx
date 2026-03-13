import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import QuestionWall from "@/components/QuestionWall";
import HowItWorks from "@/components/HowItWorks";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <QuestionWall />
        <HowItWorks />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
