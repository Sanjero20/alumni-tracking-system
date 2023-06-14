import { ChangeEvent } from 'react';
import { create } from 'zustand';

type AccountState = {
  email: string;
  password: string;
};

type AccountAction = {
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  resetAccount: () => void;
};

export const useAccountStore = create<AccountState & AccountAction>()(
  (set) => ({
    email: '',
    password: '',

    handleEmail: (event) => {
      set({ email: event.target.value });
    },

    handlePassword: (event) => {
      set({ password: event.target.value });
    },

    resetAccount: () => set({ email: '', password: '' }),
  })
);
