import AuthLayout from '@/services/auth/authLayout';
import { auth } from '@/firebase/config';
import Header from '@/components/Header';
import { useContext } from 'react';
import { AuthContext } from '@/services/auth/authContext';
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Home() {
  const value = useContext(AuthContext);

  return (
    <AuthLayout>
      <Header />

      <button onClick={() => auth.signOut()} className="bg-primary">
        Signout
      </button>
    </AuthLayout>
  );
}
