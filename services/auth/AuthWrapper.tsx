import React, { useEffect } from 'react';
import { auth } from '@/firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAuthStore } from '@/stores/user';
import { getUserAccountDetails } from '../request';

type AuthProps = {
  children: React.ReactNode;
};

function AuthWrapper({ children }: AuthProps) {
  const [user, loading, error] = useAuthState(auth);
  const { updateAuth, updateAccountStatus } = useAuthStore();

  useEffect(() => {
    const getData = async () => {
      if (!user) return;

      const account = await getUserAccountDetails(user.uid);
      if (account) {
        updateAccountStatus(account);
      }
    };

    updateAuth(user, loading, error);
    getData();
  }, [user, loading, error, updateAuth, updateAccountStatus]);

  return <>{children}</>;
}

export default AuthWrapper;
