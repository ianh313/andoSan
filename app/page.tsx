import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { IndustryContext } from "@/components/IndustryContext";
import { FieldNotes } from "@/components/FieldNotes";
import { Vision } from "@/components/Vision";
import { Philosophies } from "@/components/Philosophies";
import { WorldModel } from "@/components/WorldModel";
import { Personality } from "@/components/Personality";
import { BehaviorSystems } from "@/components/BehaviorSystems";
import { Architecture } from "@/components/Architecture";
import { Strategy } from "@/components/Strategy";
import { OpenQuestions } from "@/components/OpenQuestions";
import { Closing } from "@/components/Closing";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Manifesto />
      <IndustryContext />
      <FieldNotes />
      <Vision />
      <Philosophies />
      <WorldModel />
      <Personality />
      <BehaviorSystems />
      <Architecture />
      <Strategy />
      <OpenQuestions />
      <Closing />
    </main>
  );
}
