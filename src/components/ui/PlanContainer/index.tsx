import Image from "next/image";
import React from "react";
import { Card, CardContent, CardTitle } from "../Card";
import { cn } from "@/lib/utils";
import useStore from "../../../../store";

type PlancontainerProps = {
  item: any;
  onClick: VoidFunction;
};

export const PlanContainer = ({ item, onClick }: PlancontainerProps) => {
  const { plan } = useStore((state) => state);
  const monthlyPrice = `$${item.subscription.monthly?.price}/mo`;
  let imgSrc = "";
  let alt = "";

  switch (item?.name) {
    case "Arcade":
      imgSrc = "/assets/icons/icon-arcade.svg";
      alt = item?.name;
      break;
    case "Advanced":
      imgSrc = "/assets/icons/icon-advanced.svg";
      alt = item?.name;
    case "Pro":
      imgSrc = "/assets/icons/icon-pro.svg";
      alt = item?.name;
    default:
      break;
  }
  return (
    <Card
      className={cn(
        "w-full cursor-pointer hover:border hover:border-c-primary-purplish-blue ",
        {
          "border border-c-primary-purplish-blue bg-c-neutral-alabaster":
            plan && plan?.id === item.id,
        }
      )}
      onClick={onClick}
    >
      <CardContent className="w-full lg:pt-5 flex items-center h-full gap-[14px] p-4 lg:flex-col lg:items-start">
        <div className="relative w-10 h-10 lg:mb-[39px]">
          <Image src={imgSrc} alt={alt} fill />
        </div>
        <div className="flex flex-col gap-[7px]">
          <CardTitle className="text-base font-medium text-c-primary-marine-blue">
            {item?.name}
          </CardTitle>
          <p className="text-sm text-c-neutral-cool-gray">{monthlyPrice}</p>
        </div>
      </CardContent>
    </Card>
  );
};
