import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import QuestionWall from "@/components/QuestionWall";
import FollowMap from "@/components/FollowMap";
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
        <FollowMap />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
