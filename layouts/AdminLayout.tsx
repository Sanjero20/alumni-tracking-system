import { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';
import Header from '@/components/Header/Header';

type LayoutProps = {
  children: ReactNode;
};

function AdminLayout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col bg-body">
      <Header hiddenMenu />
      <main className="flex h-screen w-full">
        <Sidebar />
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
