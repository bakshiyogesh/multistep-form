import { cn } from "@/lib/utils";
import React from "react";
import useStore from "../../../../../store";
import { Button } from "../../button";

type FooterProps = {
  className?: string;
  onHandleNextStep?: () => any;
  onHandlePreviousStep?: () => void;
};

export const Footer = ({
  className,
  onHandleNextStep,
  onHandlePreviousStep,
}: FooterProps) => {
  const step = useStore((state) => state.step);
  const { isLastStep } = useStore((state) => state);
  const steps = localStorage.getItem("step") || 1;
  const savedStep = Number(steps);
  console.log("savedStepsavedStep", savedStep);
  const handleNextPage = () => {
    if (onHandleNextStep) {
      onHandleNextStep();
      if (savedStep === 4) {
        isLastStep(true);
      }
    }
  };
  return (
    <footer
      className={cn(
        "pt-4  lg:p-4 lg:pr-0 bg-c-neutral-white flex items-center justify-between",
        className
      )}
    >
      {savedStep === 1 && <div className="w-full" />}
      {savedStep > 1 && (
        <Button
          variant="ghost"
          className="text-c-neutral-cool-gray hover:bg-gray-100 hover:text-c-primary-marine-blue"
          onClick={onHandlePreviousStep}
        >
          Go Back
        </Button>
      )}
      <Button
        className={cn(
          "bg-c-primary-marine-blue text-c-neutral-white hover:bg-c-primary-marine-blue-hover"
        )}
        onClick={handleNextPage}
      >
        {savedStep === 4 ? "Confirm" : "Next Step"}
      </Button>
    </footer>
  );
};
