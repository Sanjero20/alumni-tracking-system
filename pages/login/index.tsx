/* eslint-disable react-hooks/exhaustive-deps */
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Illustration from '@/components/Login/Illustration';
import LoginForm from '@/components/Login/Form';
import LinkToSignUpPage from '@/components/Login/Link';

import { loginUser } from '@/services/auth/authService';
import { useAuthStore } from '@/stores/user';
import Heading from '@/components/Login/Heading';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Utility states
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // States for checking user credentials
  const { user, loading } = useAuthStore();
  const { isVerified, permission, updateAccountStatus } = useAuthStore();

  const router = useRouter();

  // Redirect to homepage when already authenticated
  useEffect(() => {
    const path = permission === 'admin' ? '/admin' : '/';
    if (user && isVerified) router.replace(path);
  }, [user, isVerified, router]);

  // Remove existing error messages when typing in input fields
  useEffect(() => {
    if (!error) return;
    setError('');
  }, [email, password]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setIsBtnDisabled(true);

    const { account, errorMsg } = await loginUser(email, password);
    if (account) {
      updateAccountStatus(account);
    }

    // After Login logic
    setIsBtnDisabled(false);
    setError(errorMsg);
  };

  // Display nothing when user is not authenticated
  if ((user && isVerified) || loading) return;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 md:flex-row md:gap-0">
      <section className="flex-col items-center justify-center gap-1 bg-white sm:flex md:h-full md:w-1/2 md:bg-primary">
        <Illustration />
      </section>

      <section className="flex w-full flex-col items-center justify-center p-4 md:w-1/2">
        <div className="flex w-4/5 flex-col justify-center gap-2">
          <Heading />

          <LoginForm
            email={email}
            password={password}
            handleEmail={setEmail}
            handlePassword={setPassword}
            handleLogin={handleLogin}
            isBtnDisabled={isBtnDisabled}
            error={error}
          />

          <hr />

          <LinkToSignUpPage />
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
