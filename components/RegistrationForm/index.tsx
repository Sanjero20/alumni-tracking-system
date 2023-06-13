import React, { FormEvent } from 'react';

// Utils
import { signUpUser } from '@/services/auth/authService';

// Form Categories
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

    console.log(registrationData);

    const error = await signUpUser(registrationData);
    console.log(error);
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
