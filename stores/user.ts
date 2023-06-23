import { Permission } from '@/types/account';
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
  updateIsVerified: (bool: boolean) => void;
  updateUserPermission: (role: Permission) => void;
  resetAuth: () => void;
};

const initialAuthState: AuthState = {
  user: null,
  loading: true,
  isVerified: false,
  permission: 'user',
  error: null,
};

export const useAuthStore = create<AuthState & AuthAction>()((set) => ({
  ...initialAuthState,

  updateAuth: (user, loading, error) => set(() => ({ user, loading, error })),
  updateIsVerified: (bool) => set(() => ({ isVerified: bool })),
  updateUserPermission: (permission) => set(() => ({ permission })),
  resetAuth: () => set(() => initialAuthState),
}));
