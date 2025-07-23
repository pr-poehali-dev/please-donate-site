import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import CreateProjectSection from "@/components/CreateProjectSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturedProjects />
      <CreateProjectSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;