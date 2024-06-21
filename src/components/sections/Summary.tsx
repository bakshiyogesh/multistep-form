"use client";
import React from "react";
import { SectionHeader } from "../ui/SectionHeader";
import { Container } from "../ui/Container";
import useStore from "../../../store";
import { AddOn } from "../../../store/Slices/AddOnSlice";
import { ThankYou } from "./Thankyou";
import { useRouter } from "next/navigation";
// import ThankYou from "./ThankYou";

function calculateAddOns(addOns: AddOn[]) {
  return addOns.reduce((total: number, addOn: AddOn) => total + addOn.price, 0);
}

export default function Summary() {
  const router = useRouter();
  const { step, decreaseStep, plan, selectedAddOns, isSubmitted, onSubmit } =
    useStore((state) => state);

  const onNext = () => {
    onSubmit(isSubmitted);
    localStorage.setItem("step", "4");
  };

  const onPrevious = () => {
    decreaseStep(step);
    router.back();
  };

  const subscriptionType = plan.type === "yearly" ? "yr" : "mo";
  const total = calculateAddOns(selectedAddOns) + plan.price;

  return (
    <Container onNext={onNext} onPreviousStep={onPrevious}>
      {isSubmitted ? (
        <ThankYou />
      ) : (
        <>
          <SectionHeader
            title="Finishing up"
            description="Double-check everything looks OK before confirming."
          />
          <section className="bg-c-neutral-alabaster rounded-[8px] px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-c-primary-marine-blue font-medium lg:text-base">{`${plan.name} (${plan.type})`}</h3>
              </div>
              <span className="text-sm font-bold text-c-primary-marine-blue inline lg:text-base">
                {`${plan.price}/${subscriptionType}`}
              </span>
            </div>
            <div className="h-[1px] w-full bg-c-neutral-light-gray my-3" />
            <div className="flex flex-col gap-3">
              {selectedAddOns.length > 0 &&
                selectedAddOns.map((item: any) => (
                  <div
                    className="flex items-center justify-between"
                    key={item.id}
                  >
                    <span className="text-c-neutral-cool-gray text-sm">
                      {item.name}
                    </span>
                    <span className="text-c-primary-marine-blue text-sm">
                      {`+${item.price}/${subscriptionType}`}
                    </span>
                  </div>
                ))}
            </div>
          </section>
          <div className="mt-6 flex items justify-between px-4">
            <span className="text-c-neutral-cool-gray text-sm">{`Total (per ${
              plan.type === "yearly" ? "year" : "month"
            })`}</span>
            <span className="text-base font-bold text-c-primary-purplish-blue lg:text-xl">
              {`+$${total}/${subscriptionType}`}
            </span>
          </div>
        </>
      )}
    </Container>
  );
}
