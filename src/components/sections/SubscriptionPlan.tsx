"use client";
import React, { useEffect, useState } from "react";
import useStore from "../../../store";
import { plans } from "@/data";
import { SectionHeader } from "../ui/SectionHeader";
import { Container } from "../ui/Container";
import { PlanContainer } from "../ui/PlanContainer";
import { useRouter } from "next/navigation";

export const SubscriptionPlan = () => {
  const { plan, subscriptionAddOn, step, increaseStep, decreaseStep } =
    useStore((state) => state);
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(plan);
  useEffect(() => {
    subscriptionAddOn({
      ...plan,
      ...selectedPlan,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPlan]);

  const onNext = () => {
    if (!selectedPlan?.id || !plan.name) return;
    increaseStep(step);
    router.push("/addonService");
  };

  const onPrevious = () => {
    decreaseStep(step);
    router.back();
    localStorage.setItem("step", "1");
  };
  const handleOnClick = (plan: any) => {
    setSelectedPlan({
      ...selectedPlan,
      id: plan.id,
      name: plan.name,
      price: plan.subscription.monthly.price,
      type: plan.subscription.monthly.type,
    });
  };
  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      <div>
        <SectionHeader
          title="Select your plan"
          description="You have the option of monthly billing."
        />
        <section className="flex flex-col gap-3 lg:flex-row lg:gap-4 w-full">
          {plans.map((plan) => (
            <PlanContainer
              key={plan.id}
              onClick={() => handleOnClick(plan)}
              item={plan}
            />
          ))}
        </section>
      </div>
    </Container>
  );
};
