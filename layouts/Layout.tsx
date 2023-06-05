import React from 'react';
import AuthLayout from '@/services/auth/authLayout';
import Header from '@/components/Header/Header';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <AuthLayout>
      <Header />
      {children}
    </AuthLayout>
  );
}

export default Layout;
