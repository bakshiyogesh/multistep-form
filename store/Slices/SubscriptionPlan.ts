import { subscribe } from "diagnostics_channel";
import { StateCreator } from "zustand";
type SubscribePlanType = {
  id: number | null;
  name: string;
  price: number;
  type: string;
};
const subcribeInitialState = {
  id: null,
  name: "",
  price: 0,
  type: "",
};
type SubscriptionSliceType = {
  plan: SubscribePlanType;
  subscriptionAddOn: (addOn: SubscribePlanType) => void;
  //   unToggledAddOn: (AddOnId: number) => void;
};

const SubscriptionPlanSlice: StateCreator<SubscriptionSliceType> = (set) => ({
  plan: subcribeInitialState,
  subscriptionAddOn: (addOn) =>
    set((state) => ({ plan: { ...state.plan, ...addOn } })),
  resetSubscription: () => set((state) => ({ plan: subcribeInitialState })),
});

export default SubscriptionPlanSlice;
export type { SubscribePlanType, SubscriptionSliceType };
