import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { AcadAccount } from '@/types/account';

const initialAcadAccount: AcadAccount = {
  bsuEmail: '',
  srCode: '',
};

type AcadAccountState = {
  account: AcadAccount;
};

type AcadAccountAction = {
  handleAcademicAccount: (e: ChangeEvent<HTMLInputElement>) => void;
  resetAcademicAccount: () => void;
};

export const useAcademicAccountStore = create<
  AcadAccountState & AcadAccountAction
>()(
  //
  (set) => ({
    account: initialAcadAccount,

    handleAcademicAccount: (event) =>
      set((state: AcadAccountState) => {
        const { name, value } = event.target;

        // SR-CODE should only be 8 digits including the dash [YY-DDDDD]
        if (name === 'srCode' && value.length > 8) return state;

        return {
          account: {
            ...state.account,
            [name]: value,
          },
        };
      }),

    resetAcademicAccount: () =>
      set({
        account: initialAcadAccount,
      }),
  })
);
