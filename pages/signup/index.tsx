import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import RegistrationForm from '@/components/RegistrationForm/';

import { useContext, useEffect } from 'react';
import { AuthContext } from '@/services/auth/authContext';
import { useRouter } from 'next/router';

function SignupPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) router.push('/');
  }, [user, router]);

  if (user || loading) return null;

  return (
    <>
      <Head>
        <title>BSU Alumni Registration</title>
      </Head>

      <div className="min-h-screen">
        <Header title="Alumni Registration" />

        <main className="container m-auto">
          <RegistrationForm />

          {/* Link to login page */}
          <p className="flex gap-1">
            Already registered?
            <Link href="/login" className="text-primary underline">
              Sign in here!
            </Link>
          </p>
        </main>
      </div>
    </>
  );
}

export default SignupPage;
