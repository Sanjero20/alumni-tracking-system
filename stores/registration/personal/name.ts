import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { Name } from '@/types/account';

const initialName: Name = {
  first: '',
  middle: '',
  last: '',
};

type NameState = {
  name: Name;
};

type NameAction = {
  handleName: (e: ChangeEvent<HTMLInputElement>) => void;
  resetName: () => void;
};

export const useNameStore = create<NameState & NameAction>()(
  //
  (set) => ({
    name: initialName,

    handleName: (event) =>
      set((state: NameState) => {
        const { name, value } = event.target;
        return {
          name: {
            ...state.name,
            [name]: value,
          },
        };
      }),

    resetName: () =>
      set({
        name: initialName,
      }),
  })
);
