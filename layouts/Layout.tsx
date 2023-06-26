import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '@/components/Header/Header';
import AuthLayout from '@/services/auth/authLayout';
import { useAuthStore } from '@/stores/user';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { isVerified, permission } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (permission !== 'user' || !isVerified) {
      router.replace('/login');
    }
  }, [permission, isVerified, router]);

  return (
    <AuthLayout>
      <Header />

      <div className="h-full">{children}</div>
    </AuthLayout>
  );
}

export default Layout;
