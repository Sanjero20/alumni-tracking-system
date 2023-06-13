import React, { FormEvent } from 'react';

// Stores
import { useNameStore } from '@/stores/registration/personal/name';
import { useBirthdayStore } from '@/stores/registration/personal/birthday';
import { useAccountStore } from '@/stores/registration/account';

// Utils
import { signUpUser } from '@/services/auth/authService';

// Form Categories
import PersonalInfo from './Personal';
import AcademicInfo from './Academic';
import AccountInfo from './Account';

function RegistrationForm() {
  // Personal Info
  const { name } = useNameStore();
  const { birthday } = useBirthdayStore();

  // Account Info
  const { email, password } = useAccountStore();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    const res = await signUpUser({
      personalData: { name, birthday },
      accountData: { email, password },
    });

    console.log(res);
  };

  return (
    <form onSubmit={submitForm} className="flex w-full flex-col gap-2 md:w-3/5">
      <PersonalInfo />
      <AcademicInfo />
      <AccountInfo />

      <button
        type="submit"
        className="w-36 rounded-3xl bg-primary px-8 py-2 text-white"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
