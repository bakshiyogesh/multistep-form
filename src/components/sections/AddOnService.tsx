"use client";
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Container } from "../ui/Container";
import { addOns } from "@/data";
import { AddonCard } from "../ui/AddOnCard";
import useStore from "../../../store";
import { useRouter } from "next/navigation";

export function AddonsService() {
  const router = useRouter();
  const { step, increaseStep, decreaseStep } = useStore((state) => state);

  const onNext = () => {
    increaseStep(step);
    router.push("/summary");
    localStorage.setItem("step", "3");
  };

  const onPrevious = () => {
    decreaseStep(step);
    router.back();
    localStorage.setItem("step", "2");
  };

  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      <SectionHeader
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <section className="mt-[22px] flex flex-col gap-4">
        {addOns.map((addon) => (
          <AddonCard key={addon.id} addOn={addon} />
        ))}
      </section>
    </Container>
  );
}
