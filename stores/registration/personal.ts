import { ChangeEvent } from 'react';
import { create } from 'zustand';

import { Name, Birthday } from '@/utils/types';

type PersonalDataState = {
  name: Name;
  birthday: Birthday;
};

type PersonalDataActions = {
  handleName: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBirthday: (e: ChangeEvent<HTMLSelectElement>) => void;
  resetPersonaldata: () => void;
};

const initialName = {
  first: '',
  middle: '',
  last: '',
};

const initialBirthday = {
  month: '',
  day: '',
  year: '',
};

export const usePersonalDataStore = create<
  PersonalDataState & PersonalDataActions
>()(
  //
  (set) => ({
    name: initialName,
    birthday: initialBirthday,

    // Event Handlers
    handleName: (event) =>
      set((state: PersonalDataState) => {
        const { name, value } = event.target;
        return {
          name: {
            ...state.name,
            [name]: value,
          },
        };
      }),

    handleBirthday: (event) =>
      set((state: PersonalDataState) => {
        const { name, value } = event.target;
        return {
          birthday: {
            ...state.birthday,
            [name]: value,
          },
        };
      }),

    resetPersonaldata: () =>
      set({
        name: initialName,
        birthday: initialBirthday,
      }),
  })
);
