import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/user';

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props) {
  const { user, loading, isVerified } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    if ((!user && !loading) || !isVerified) {
      router.replace('/login');
    }
  }, [user, loading, isVerified, router]);

  // Prevent from displaying page when not authenticated
  if (!user || loading) return null;

  // Return child components when user is authenticated or still loading
  return <div className="min-h-screen bg-body">{children}</div>;
}

export default AuthLayout;
