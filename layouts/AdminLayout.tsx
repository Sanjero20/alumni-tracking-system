import { ReactNode, useEffect } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';
import AuthLayout from '@/services/auth/authLayout';
import { useAuthStore } from '@/stores/user';
import { useRouter } from 'next/router';

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
      <div className="flex h-screen flex-col">
        <Header hiddenMenu />
        <main className="flex h-screen w-full ">
          <Sidebar />
          <div className="min-h-full w-full bg-body p-2">{children}</div>
        </main>
      </div>
    </AuthLayout>
  );
}

export default AdminLayout;
