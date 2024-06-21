import { create } from "zustand";
import { PersonalInfoSliceType } from "./Slices/PersonalInfoSlice";
import {
  AddOnSlice,
  StepSlice,
  SubscriptionPlanSlice,
  PersonalInfoSlice,
  FormSumbitSlice,
} from "./Slices";
import { StepSliceType } from "./Slices/StepsSlice";
import { SubscribePlanType } from "./Slices/SubscriptionPlan";
import { AddOnSliceType } from "./Slices/AddOnSlice";
// const useStore = create<
//   StepSliceType & SubscribePlanType & AddOnSliceType & PersonalInfoSliceType
// >()((...a) => ({
//   ...PersonalInfoSlice(...a),
//   ...SubscriptionPlanSlice(...a),
//   ...AddOnSlice(...a),
//   ...StepSlice(...a),
// }))
const useStore = create<any>()((...a) => ({
  ...PersonalInfoSlice(...a),
  ...SubscriptionPlanSlice(...a),
  ...AddOnSlice(...a),
  ...StepSlice(...a),
  ...FormSumbitSlice(...a),
}));

export default useStore;
