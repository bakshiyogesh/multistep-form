import { StateCreator } from "zustand";
type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

type PersonalInfoSliceType = {
  personalInfo: PersonalInfo;
  setPersonalInfo: (data: PersonalInfo) => void;
};

const initialState = {
  name: "",
  email: "",
  phone: "",
};

const PersonalInfoSlice: StateCreator<PersonalInfoSliceType> = (set) => ({
  personalInfo: initialState,
  setPersonalInfo: (data) =>
    set((state) => ({ personalInfo: { ...state.personalInfo, ...data } })),
  resetPersonalInfo: () => set({ personalInfo: initialState }),
});

export default PersonalInfoSlice;
export type { PersonalInfo, PersonalInfoSliceType };
