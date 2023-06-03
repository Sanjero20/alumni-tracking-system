import { ChangeEvent } from 'react';
import { create } from 'zustand';

interface AccountState {
  email: string;
  password: string;
  handleEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePassword: (e: ChangeEvent<HTMLInputElement>) => void;
}
``;

export const useAccountStore = create<AccountState>()((set) => ({
  email: '',
  password: '',
  handleEmail: (event) => {
    set({ email: event.target.value });
  },
  handlePassword: (event) => {
    set({ password: event.target.value });
  },
}));
