import Image from 'next/image';
import Link from 'next/link';

function LoginPage() {
  return (
    <div className="flex h-screen">
      <section className="flex h-full w-1/2 flex-col items-center justify-center gap-2 bg-primary">
        <Image
          src="/bsu-logo.svg"
          alt="alumni-logo"
          className="w-1/2"
          width={500}
          height={500}
        />

        <h1 className="text-5xl font-bold text-white">Alumni Portal</h1>
      </section>

      <section className="flex h-full w-1/2 flex-col items-center justify-center p-4">
        <div className="flex w-4/5 flex-col justify-center gap-2">
          {/* Caption */}
          <h1 className="text-3xl font-bold text-red-600">Please Login</h1>

          {/* Login section */}
          <form className="flex flex-col gap-2">
            {/* Email */}
            <input type="email" className="border p-1" placeholder="Email" />

            {/* Password */}
            <input
              type="password"
              className="border p-1"
              placeholder="Password"
            />

            <button
              type="submit"
              className="mx-auto mt-2 w-1/3 rounded-3xl bg-primary p-2 font-bold text-white "
            >
              Sign In
            </button>
          </form>

          <hr />

          {/* Link for registration */}
          <p className="flex gap-1">
            New User?
            <Link href={'/signup'} className=" text-primary underline">
              Register Here
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
