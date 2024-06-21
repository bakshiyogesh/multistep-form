import { StateCreator } from "zustand";
type StepSliceType = {
  step: number;
  lastStep: boolean;
  increaseStep: (step: number) => void;
  decreaseStep: (step: number) => void;
  isLastStep: (step: boolean) => void;
};

const StepSlice: StateCreator<StepSliceType> = (set) => ({
  step: 1,
  lastStep: false,
  increaseStep: (step) => set((state) => ({ ...state, step: step + 1 })),
  decreaseStep: (step) => set((state) => ({ ...state, step: step - 1 })),
  isLastStep: (lastStep) => set((state) => ({ ...state, lastStep: lastStep })),
});

export default StepSlice;
export type { StepSliceType };
