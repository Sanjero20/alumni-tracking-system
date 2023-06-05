import React, { useEffect, Suspense } from 'react';
import { auth } from '@/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuthStore } from '@/stores/user';

type AuthProps = {
  children: React.ReactNode;
};

function AuthWrapper({ children }: AuthProps) {
  const [user, loading, error] = useAuthState(auth);
  const { updateAuth } = useAuthStore();

  useEffect(() => {
    updateAuth(user, loading, error);
  }, [user, loading, error, updateAuth]);

  return <>{children}</>;
}

export default AuthWrapper;
