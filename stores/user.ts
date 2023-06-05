import { create } from 'zustand';

type User = object | null | undefined;

type AuthState = {
  user: User;
  loading: boolean;
  error: any;

  updateAuth: (user: User, loading: boolean, error: any) => void;
};

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  loading: true,
  error: undefined,

  updateAuth: (user, loading, error) => set(() => ({ user, loading, error })),
}));
