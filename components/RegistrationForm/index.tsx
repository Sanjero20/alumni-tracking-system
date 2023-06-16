import React, { FormEvent, useState } from 'react';

// Utils
import { signUpUser } from '@/services/auth/authService';

// Components
import Button from '../Button';
import PersonalInfo from './Personal';
import AcademicInfo from './Academic';
import AccountInfo from './Account';

// Stores
import { useNameStore } from '@/stores/registration/personal/name';
import { useBirthdayStore } from '@/stores/registration/personal/birthday';
import { useCourseStore } from '@/stores/registration/academic/course';
import { useAcademicYearStore } from '@/stores/registration/academic/year';
import { useAccountStore } from '@/stores/registration/account';
import { AccountRegister } from '@/types/registration';
import { useAcademicAccountStore } from '@/stores/registration/academic/account';

function RegistrationForm() {
  const [error, setError] = useState<string | null>('');

  // Personal Info
  const { name } = useNameStore();
  const { birthday } = useBirthdayStore();

  // Academic Info
  const { course } = useCourseStore();
  const { acadYear } = useAcademicYearStore();
  const { account } = useAcademicAccountStore();

  // Account Info
  const { email, password } = useAccountStore();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    const registrationData: AccountRegister = {
      personalData: { name, birthday },
      accountData: { email, password },
      academicData: { course, year: acadYear, account },
    };

    const error = await signUpUser(registrationData);
    setError(error);
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col gap-2 ">
      <PersonalInfo />
      <AcademicInfo />
      <AccountInfo />

      {error && <p className="font-bold text-red-500">{error}</p>}

      <Button type="submit" className="w-fit">
        Register
      </Button>
    </form>
  );
}

export default RegistrationForm;
