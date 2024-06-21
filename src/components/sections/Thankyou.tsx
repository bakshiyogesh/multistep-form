"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import useStore from "@@/index";
export function ThankYou() {
  const router = useRouter();
  const {
    step,
    decreaseStep,
    onSubmit,
    resetPersonalInfo,
    resetSubscription,
    resetToggledAddon,
  } = useStore((state) => state);
  const handlerForHomePage = () => {
    router.push("/");
    localStorage.setItem("step", "1");
    decreaseStep(3);
    onSubmit(true);
    resetPersonalInfo();
    resetSubscription();
    resetToggledAddon();
  };
  return (
    <section className="flex flex-col items-center justify-center h-full text-center">
      <div className="relative w-14 h-14 mb-6">
        <Image
          src="/assets/icons/icon-thank-you.svg"
          alt="checkmark inside a circle"
          fill
        />
      </div>
      <h3 className="text-2xl lg:text-[32px] text-c-primary-marine-blue mb-[9px]">
        Thank you!
      </h3>
      <p className="text-c-neutral-cool-gray text-base">
        Thanks for confirming your subscription! We hope you have fun using our
        Services.
      </p>
      <Button
        variant="ghost"
        className={cn(
          " mt-3 bg-c-primary-marine-blue text-c-neutral-white hover:bg-c-primary-marine-blue-hover"
        )}
        onClick={handlerForHomePage}
      >
        Go Home
      </Button>
    </section>
  );
}
