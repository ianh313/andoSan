import { Nav } from "@/components/Nav";
import { HeroSection } from "@/components/HeroSection";
import { ProblemStorySection } from "@/components/ProblemStorySection";
import { ServiceMomentSection } from "@/components/ServiceMomentSection";
import { JourneySection } from "@/components/JourneySection";
import { ValueSection } from "@/components/ValueSection";
import { DifferenceSection } from "@/components/DifferenceSection";
import { TrustSection } from "@/components/TrustSection";
import { IdealCustomerSection } from "@/components/IdealCustomerSection";
import { CTASection } from "@/components/CTASection";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <HeroSection />
      <ProblemStorySection />
      <ServiceMomentSection />
      <JourneySection />
      <ValueSection />
      <DifferenceSection />
      <TrustSection />
      <IdealCustomerSection />
      <CTASection />
    </main>
  );
}
