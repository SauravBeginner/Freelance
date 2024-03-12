import { HeroSection } from "../components/HeroSection";
import { FeaturedSection } from "../components/FeaturedSection";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { UpcomingWebinars } from "../components/UpcomingWebinars";
import Instructors from "../components/Instructors";
import TestimonialCards from "../components/TestimonialCards";

const Home = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedSection />
      <WhyChooseUs />
      <UpcomingWebinars />
      <Instructors />
      <TestimonialCards />
    </main>
  );
};

export default Home;
