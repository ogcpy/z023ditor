import { Hero } from "@/components/Hero";
import { CourseOverview } from "@/components/CourseOverview";
import { Curriculum } from "@/components/Curriculum";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseOverview />
      <Curriculum />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
