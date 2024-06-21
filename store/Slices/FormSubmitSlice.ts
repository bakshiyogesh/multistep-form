import { StateCreator } from "zustand";

type SubmitFormSliceType = {
  isSubmitted: boolean;
  onSubmit: (isSubmitted: boolean) => void;
};

const SubmitFormSlice: StateCreator<SubmitFormSliceType> = (set) => ({
  isSubmitted: false,
  onSubmit: () =>
    set((state) => ({ ...state, isSubmitted: !state.isSubmitted })),
});

export default SubmitFormSlice;
export type { SubmitFormSliceType };
