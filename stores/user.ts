import { AccountType, Permission, UserAccount } from '@/types/account';
import { create } from 'zustand';

type User = object | null | undefined;

type AuthState = {
  user: User;
  loading: boolean;
  isVerified: boolean;
  permission: Permission;
  error: any;
};

type AuthAction = {
  updateAuth: (user: User, loading: boolean, error: any) => void;
  updateAccountStatus: (account: UserAccount) => void;
  resetAuth: () => void;
};

const initialAuthState: AuthState = {
  user: null,
  loading: true,
  isVerified: false,
  permission: '',
  error: null,
};

export const useAuthStore = create<AuthState & AuthAction>()((set) => ({
  ...initialAuthState,

  updateAuth: (user, loading, error) => set(() => ({ user, loading, error })),
  updateAccountStatus: (account) =>
    set(() => ({
      isVerified: account.status === 'verified',
      permission: account.permission,
    })),
  resetAuth: () => set(() => initialAuthState),
}));
