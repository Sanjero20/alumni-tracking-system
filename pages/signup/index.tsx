import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import RegistrationForm from '@/components/RegistrationForm/';

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/stores/user';

// stores for registration handlers
import { useNameStore } from '@/stores/registration/personal/name';
import { useBirthdayStore } from '@/stores/registration/personal/birthday';
import { useAcademicAccountStore } from '@/stores/registration/academic/account';
import { useAcademicYearStore } from '@/stores/registration/academic/year';
import { useCourseStore } from '@/stores/registration/academic/course';
import { useAccountStore } from '@/stores/registration/account';

function SignupPage() {
  const { user, loading } = useAuthStore();
  const router = useRouter();

  // All registration data reset functions
  const { resetName } = useNameStore();
  const { resetBirthday } = useBirthdayStore();
  const { resetCourse } = useCourseStore();
  const { resetAcadYear } = useAcademicYearStore();
  const { resetAcademicAccount } = useAcademicAccountStore();
  const { resetAccount } = useAccountStore();

  useEffect(() => {
    if (user) router.replace('/');
  }, [user, router]);

  // Clear all fields at entering page route
  useEffect(() => {
    resetForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const resetForm = () => {
    resetName();
    resetBirthday();
    resetCourse();
    resetAcadYear();
    resetAcademicAccount();
    resetAccount();
  };

  if (user || loading) return null;

  return (
    <>
      <Head>
        <title>BSU Alumni Registration</title>
      </Head>

      <div className="min-h-screen">
        <Header title="Alumni Registration" hiddenMenu />

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
