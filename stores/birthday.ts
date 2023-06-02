import { ChangeEvent } from 'react';
import { create } from 'zustand';

type Birthday = {
  month: string;
  day: string;
  year: string;
};

interface BirthdayState {
  birthday: Birthday;
  setBirthday: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const useBirthdayStore = create<BirthdayState>()((set) => ({
  birthday: {
    month: '',
    day: '',
    year: '',
  },
  setBirthday: (event) =>
    set((state) => {
      const { name, value } = event.target;
      return {
        birthday: {
          ...state.birthday,
          [name]: value,
        },
      };
    }),
}));
