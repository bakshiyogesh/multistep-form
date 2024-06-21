import { cn } from "@/lib/utils";
import React from "react";
import { Check } from "lucide-react";
import useStore from "../../../store";

type StepperProps = {
  stepNumber: number;
  smallTitle?: string;
  sectionTitle?: string;
};

export function Stepper({
  stepNumber = 1,
  smallTitle = "",
  sectionTitle = "",
}: StepperProps) {
  const step = useStore((state) => state.step);
  const { lastStep } = useStore((state) => state);
  const steps = localStorage.getItem("step") || 1;
  const savedStep = Number(steps);
  console.log(stepNumber, "stepNumberstepNuber");

  return (
    <section className="uppercase flex items-center gap-4">
      <p
        className={cn(
          "w-[33px] h-[33px] rounded-full flex items-center justify-center text-sm font-bold text-c-neutral-white border  border-c-neutral-white",
          {
            "bg-c-primary-light-blue text-c-primary-marine-blue border-c-primary-light-blue":
              stepNumber === savedStep,
            "bg-c-primary-light-blue text-c-neutral-white border-[#bfe2fc]":
              stepNumber < savedStep,
          }
        )}
      >
        {stepNumber < savedStep || lastStep ? (
          <Check color="#02295a" size={"18px"} alignmentBaseline="central" />
        ) : (
          stepNumber
        )}
      </p>
      <div className="flex flex-col">
        <p className="text-xs text-c-primary-pastel-blue">{smallTitle}</p>
        <p className="text-sm text-c-neutral-white font-bold">{sectionTitle}</p>
      </div>
    </section>
  );
}
