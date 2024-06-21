"use client";
import { Stepper } from "@/components/ui/Stepper";
import useStore from "@@/index";
import { PersonalInfo } from "@/components/sections/PersonalInfo";
import { SubscriptionPlan } from "@/components/sections/SubscriptionPlan";
import { AddonsService } from "@/components/sections/AddOnService";
import Summary from "@/components/sections/Summary";

export default function Home() {
  const { step } = useStore((state) => state);
  return (
    <main>
      <section className="relative h-[172px] w-full   bg-cover lg:hidden bg-[#02295a]">
        <div className="flex justify-center pt-[40px] pb-[34px]">
          <Stepper stepNumber={1} />
          <Stepper stepNumber={2} />
          <Stepper stepNumber={3} />
          <Stepper stepNumber={4} />
        </div>
      </section>

      <PersonalInfo />
      {/* {step === 2 && <SubscriptionPlan />} */}
      {/* {step === 3 && <AddonsService />} */}
      {/* <AddonsService /> */}
      {/* <Summary /> */}
      {/* {step === 4 && <Summary />} */}
    </main>
  );
}
