import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { AcadYear } from '@/types/account';

const initialAcadYear: AcadYear = {
  yearStarted: '',
  yearGraduated: '',
};

type YearState = {
  acadYear: AcadYear;
};

type YearAction = {
  handleAcademicYear: (e: ChangeEvent<HTMLInputElement>) => void;
  resetAcadYear: () => void;
};

export const useAcademicYearStore = create<YearState & YearAction>()((set) => ({
  acadYear: initialAcadYear,

  handleAcademicYear: (event) =>
    set((state: YearState) => {
      const { name, value } = event.target;

      // Limit the value to 4 digits to represent a year
      if (value.length > 4) return state;

      return {
        acadYear: {
          ...state.acadYear,
          [name]: value,
        },
      };
    }),

  resetAcadYear: () =>
    set({
      acadYear: initialAcadYear,
    }),
}));
