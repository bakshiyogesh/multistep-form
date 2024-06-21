import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "../../ui/Card";
import { Checkbox } from "../checkbox";
import useStore from "../../../../store";
import { cn } from "@/lib/utils";

type AddOn = {
  id: number;
  name: string;
  description: string;
  subscription: {
    monthly: {
      price: number;
      type: string;
    };
    yearly: {
      price: number;
      type: string;
    };
  };
};

function normalizeAddOn(addOn: AddOn) {
  return {
    id: addOn.id,
    name: addOn.name,
    description: addOn.description,
    price: addOn.subscription.monthly.price,
    type: addOn.subscription.monthly.type,
  };
}

export const AddonCard = ({ addOn }: any) => {
  const { toggleAddOn, unToggledAddOn, selectedAddOns } = useStore(
    (state) => state
  );
  const isChecked = selectedAddOns.some((item: any) => item.id === addOn.id);

  const formattedPrice = `+$${addOn?.subscription.monthly.price}/mo`;
  const addOnHandler = () => {
    console.log("ischecked", isChecked);
    if (isChecked) {
      console.log("isChecked", isChecked);
      unToggledAddOn(addOn.id);
    } else {
      toggleAddOn(normalizeAddOn(addOn));
    }
  };

  console.log(isChecked, "isCheckedisCheckedisChecked");
  return (
    <label htmlFor={addOn.id}>
      <Card
        className={cn(
          "hover:border-c-primary-purplish-blue cursor-pointer focus:border-c-primary-strawberry-red ",
          {
            "border border-c-primary-purplish-blue bg-c-neutral-alabaster":
              isChecked,
          }
        )}
      >
        <CardContent className="flex items-center py-[13px] px-4 w-full justify-between lg:py-4 lg:px-6">
          <div className="flex items-center gap-4">
            <Checkbox
              id={addOn.id}
              checked={isChecked}
              onCheckedChange={addOnHandler}
            />
            <div>
              <CardTitle className="text-sm lg:text-base font-medium text-c-primary-marine-blue">
                {addOn?.name}
              </CardTitle>
              <p className="text-xs lg:text-[15px] text-c-neutral-cool-gray">
                {addOn?.description}
              </p>
            </div>
          </div>
          <div className="text-xs text-c-primary-purplish-blue lg:text-[15px]">
            {formattedPrice}
          </div>
        </CardContent>
      </Card>
    </label>
  );
};
