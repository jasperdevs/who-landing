import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue">
      <div className="mx-auto max-w-[940px] px-4 py-3 flex flex-col gap-3">
        <Navbar />
        <Hero />
        <Features />
        <Comparison />
        <Faq />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
