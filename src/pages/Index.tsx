import { Hero } from "@/components/Hero";
import { BrandTrust } from "@/components/BrandTrust";
import { CourseOverview } from "@/components/CourseOverview";
import { Curriculum } from "@/components/Curriculum";
import { SocialProof } from "@/components/SocialProof";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <BrandTrust />
      <CourseOverview />
      <Curriculum />
      <SocialProof />
      <Footer />
    </div>
  );
};

export default Index;
