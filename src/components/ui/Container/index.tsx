import { Sidebar } from "../Sidebar";
import { cn } from "@/lib/utils";
import useStore from "../../../../store";
// import useStore from '@/s'
import React from "react";
import { Footer } from "./Footer";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  onNext: () => void;
  onPreviousStep?: () => void;
};

export const Container = ({
  children,
  className,
  onNext,
  onPreviousStep,
}: ContainerProps) => {
  const { step, isSubmitted } = useStore((state) => state);
  console.log("stepstepstep", step);

  return (
    <>
      <section
        className={cn(
          "flex pb-20 w-80 px-6 py-8 lg:px-[100px] lg:pt-10 bg-c-neutral-white lg:flex lg:w-[940px] rounded-[15px] c-shadow absolute top-[114px] lg:static lg:mx-auto left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 lg:mt-[60px] lg:p-4 min-h-[376px] lg:min-h-[600px] lg:gap-[100px]",
          className
        )}
      >
        <Sidebar />
        <div className="w-full lg:mr-[80px] relative">
          {children}
          {!isSubmitted && (
            <Footer
              className="  lg:inline-flex lg:absolute lg:bottom-0 lg:left-0 lg:right-0"
              onHandleNextStep={onNext}
              onHandlePreviousStep={onPreviousStep}
            />
          )}
        </div>
      </section>
      {/* {!isSubmitted && (
        <Footer
          className={cn(
            "inline-flex scroll-m-36  bg-[#f0f5fe] lg:hidden absolute bottom-0 left-0 right-0"
            // { "-bottom-32": step === 2 }
          )}
          onHandleNextStep={onNext}
          onHandlePreviousStep={onPreviousStep}
        />
      )} */}
    </>
  );
};
