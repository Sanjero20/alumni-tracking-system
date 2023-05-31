import React, { createContext, useEffect, useState } from 'react';
import { auth } from '@/firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

type ProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<any>(null);

function AuthProvider({ children }: ProviderProps) {
  const [user, loading, error] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
