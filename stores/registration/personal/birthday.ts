import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { Birthday } from '@/types/account';

const initialBirthday: Birthday = {
  month: '',
  day: '',
  year: '',
};

type BirthdayState = {
  birthday: Birthday;
};

type BirthdayAction = {
  handleBirthday: (e: ChangeEvent<HTMLSelectElement>) => void;
  resetBirthday: () => void;
};

export const useBirthdayStore = create<BirthdayState & BirthdayAction>()(
  //
  (set) => ({
    birthday: initialBirthday,

    handleBirthday: (event) =>
      set((state: BirthdayState) => {
        const { name, value } = event.target;
        return {
          birthday: {
            ...state.birthday,
            [name]: value,
          },
        };
      }),

    resetBirthday: () =>
      set({
        birthday: initialBirthday,
      }),
  })
);
