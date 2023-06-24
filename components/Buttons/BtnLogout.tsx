import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/user';
import { auth } from '@/firebase.config';

type BtnProps = {
  children: ReactNode;
  className?: string;
};

function BtnLogout({ children, className }: BtnProps) {
  const { resetAuth } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    resetAuth();
    auth.signOut();
    router.replace('/');
  };

  return (
    <button className={className} onClick={handleLogout}>
      {children}
    </button>
  );
}

export default BtnLogout;
