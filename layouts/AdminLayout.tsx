import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/router';
import Sidebar from '@/components/Sidebar/Sidebar';
import AuthLayout from '@/services/auth/authLayout';
import { useAuthStore } from '@/stores/user';

type LayoutProps = {
  children: ReactNode;
};

function AdminLayout({ children }: LayoutProps) {
  const { permission } = useAuthStore();

  const router = useRouter();

  useEffect(() => {
    if (permission !== 'admin') {
      router.replace('/login');
    }
  }, [permission, router]);

  if (permission !== 'admin') return null;

  return (
    <AuthLayout>
      <div className="flex h-screen flex-row p-2">
        <Sidebar />
        <div className="h-full p-2">{children}</div>
      </div>
    </AuthLayout>
  );
}

export default AdminLayout;
