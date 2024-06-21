import React from "react";
import { Stepper } from "../Stepper";

type Props = {};

export const Sidebar = () => {
  return (
    <aside className="hidden lg:flex lg:w-[274px] lg:h-[568px] lg:flex-col lg:flex-shrink-0 rounded-md bg-[#02295a] lg:px-8 pt-10 lg:gap-8 ">
      <Stepper
        stepNumber={1}
        smallTitle="Step 1"
        sectionTitle="Your Bio Details"
      />
      <Stepper stepNumber={2} smallTitle="Step 2" sectionTitle="Select Plan" />
      <Stepper
        stepNumber={3}
        smallTitle="Step 3"
        sectionTitle="Select Add-ons"
      />
      <Stepper stepNumber={4} smallTitle="Step 4" sectionTitle="Summary" />
    </aside>
  );
};
