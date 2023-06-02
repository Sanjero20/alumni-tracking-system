import { ChangeEvent } from 'react';
import { create } from 'zustand';

type Name = {
  first: string;
  middle: string;
  last: string;
};

interface NameState {
  name: Name;
  setName: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useNameStore = create<NameState>()((set) => ({
  name: {
    first: '',
    middle: '',
    last: '',
  },
  setName: (event) =>
    set((state: any) => {
      const { name, value } = event.target;
      return {
        name: {
          ...state.name,
          [name]: value,
        },
      };
    }),
}));
