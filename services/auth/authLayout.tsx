import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/user';

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props) {
  const { user, loading } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  // Prevent from displaying page when not authenticated
  if (!user || loading) return null;

  // Return child components when user is authenticated or still loading
  return <div className="min-h-screen bg-body">{children}</div>;
}

export default AuthLayout;
