/* eslint-disable react-hooks/exhaustive-deps */

import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { loginUser } from '@/services/auth/authService';
import { useAuthStore } from '@/stores/user';
import Button from '@/components/Button';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { user, loading } = useAuthStore();
  const router = useRouter();

  // Redirect to homepage when already authenticated
  useEffect(() => {
    if (user) router.replace('/');
  }, [user, router]);

  // Remove existing error messages when typing in input fields
  useEffect(() => {
    if (!error) return;
    setError('');
  }, [email, password]);

  const loginAccount = async (e: FormEvent) => {
    e.preventDefault();

    setIsDisabled(true);
    const error = await loginUser(email, password);
    setIsDisabled(false);
    setError(error);
  };

  // Display nothing when user is not authenticated
  if (user || loading) return null;

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5 md:flex-row md:gap-0">
      <section className="flex-col items-center justify-center gap-1 bg-white sm:flex md:h-full md:w-1/2 md:bg-primary">
        <Image
          src="/bsu-logo.svg"
          alt="alumni-logo"
          className="mx-auto w-1/3 md:w-1/2"
          priority={true}
          width={0}
          height={0}
        />

        <h1 className=" text-center text-3xl font-bold text-red-600 md:text-5xl md:text-white">
          Alumni Portal
        </h1>
      </section>

      <section className="flex w-full flex-col items-center justify-center p-4 md:w-1/2">
        <div className="flex w-4/5 flex-col justify-center gap-2">
          <h1 className="text-2xl font-bold text-red-600 md:text-3xl">
            Please Login
          </h1>

          {/* Login section */}
          <form
            onSubmit={(e) => loginAccount(e)}
            className="flex flex-col gap-2"
          >
            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {error && <p className="font-bold text-red-500">{error}</p>}

            <Button type="submit" className="mx-auto" disabled={isDisabled}>
              Sign In
            </Button>
          </form>

          <hr />

          {/* Link for registration */}
          <p className="flex gap-1">
            Are you an alumnus?
            <Link href={'/signup'} className=" text-primary underline">
              Register here.
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
