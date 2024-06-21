import { StateCreator } from "zustand";
type AddOn = {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
};
const initialStateAddon = {
  id: -1,
  name: "",
  description: "",
  price: 0,
  type: "",
};
type AddOnSliceType = {
  selectedAddOns: AddOn[];
  toggleAddOn: (addOn: AddOn) => void;
  unToggledAddOn: (AddOnId: number) => void;
};

const AddOnSlice: StateCreator<AddOnSliceType> = (set) => ({
  selectedAddOns: [],
  toggleAddOn: (addOn) =>
    set((state) => ({
      selectedAddOns: state.selectedAddOns.concat(addOn),
    })),
  unToggledAddOn: (addOnId) =>
    set((state) => ({
      selectedAddOns: state.selectedAddOns.filter((c) => c.id !== addOnId),
    })),
  resetToggledAddon: () => set((state) => ({ selectedAddOns: [] })),
});

export default AddOnSlice;
export type { AddOn, AddOnSliceType };
