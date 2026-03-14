import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="mx-auto max-w-5xl px-5 flex flex-col gap-5 pb-8">
          <Hero />
          <Features />
          <Comparison />
          <Faq />
          <Cta />
        </div>
        <Footer />
      </main>
    </>
  );
}
