import { ReactNode, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from './authContext';

type Props = {
  children: ReactNode;
};

function AuthLayout({ children }: Props) {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [user, loading, router]);

  // Prevent from displaying page when not authenticated
  if (!user || loading) return null;

  // Return child components when user is authenticated or still loading
  return <>{children}</>;
}

export default AuthLayout;
