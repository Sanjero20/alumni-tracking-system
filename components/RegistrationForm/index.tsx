import React, { FormEvent } from 'react';

// Stores
import { usePersonalDataStore } from '@/stores/registration/personal';
import { useAccountStore } from '@/stores/registration/account';

// Utils
import { signUpUser } from '@/services/auth/authService';

// Form Categories
import PersonalInfo from './Personal';
import AcademicInfo from './Academic';
import AccountInfo from './Account';

function RegistrationForm() {
  // Personal Info
  const { email, password } = useAccountStore();
  const { name, birthday } = usePersonalDataStore();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    console.log(name, email, password);

    const res = await signUpUser({
      personalData: { name, birthday },
      accountData: { email, password },
    });

    console.log(res);
  };

  return (
    <form onSubmit={submitForm} className="flex w-3/5 flex-col gap-2">
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
