import { FormEvent, useState } from 'react';
import Button from '../Buttons';
import Spinner from '../Spinner/Spinner';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type FormProps = {
  email: string;
  password: string;
  handleEmail: (e: string) => void;
  handlePassword: (e: string) => void;
  handleLogin: (e: FormEvent) => void;
  isBtnDisabled: boolean;
  error: string | null;
};

function LoginForm({
  email,
  password,
  handleEmail,
  handlePassword,
  handleLogin,
  isBtnDisabled,
  error,
}: FormProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form onSubmit={(e) => handleLogin(e)} className="flex flex-col gap-2">
      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleEmail(e.target.value)}
        required
      />

      {/* Password */}
      <div className="justify relative flex items-center justify-end">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => handlePassword(e.target.value)}
          required
        />

        <button
          type="button"
          className="absolute h-full w-auto px-3 text-gray-500"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      {error && <p className="font-bold text-red-500">{error}</p>}

      <Button
        type="submit"
        className="mx-auto flex h-10 w-36 items-center justify-center"
        disabled={isBtnDisabled}
      >
        {!isBtnDisabled ? <>Sign In</> : <Spinner />}
      </Button>
    </form>
  );
}

export default LoginForm;
