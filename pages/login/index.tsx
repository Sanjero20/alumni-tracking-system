import { FormEvent, useContext, useEffect, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/config';
import { AuthContext } from '@/context/AuthContext';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  // Redirect to homepage when already authenticated
  useEffect(() => {
    if (user) router.push('/');
  }, [user, router]);

  const loginAccount = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (error: any) {
      console.log(error.code);
      // auth/user-not-found
      // auth/wrong-password
    }
  };

  // Prevent from displaying the login page
  // when checking if user is authenticated
  if (user || loading) return null;

  return (
    <div className="flex h-screen">
      <section className="flex h-full w-1/2 flex-col items-center justify-center gap-2 bg-primary">
        <Image
          src="/bsu-logo.svg"
          alt="alumni-logo"
          className="w-1/2"
          priority={true}
          width={500}
          height={500}
        />

        <h1 className="text-5xl font-bold text-white">Alumni Portal</h1>
      </section>

      <section className="flex h-full w-1/2 flex-col items-center justify-center p-4">
        <div className="flex w-4/5 flex-col justify-center gap-2">
          <h1 className="text-3xl font-bold text-red-600">Please Login</h1>

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
            />

            {/* Password */}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="mx-auto mt-2 rounded-3xl bg-primary px-10 py-2 font-bold text-white "
            >
              Sign In
            </button>
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
