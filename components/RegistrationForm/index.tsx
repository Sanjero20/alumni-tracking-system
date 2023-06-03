import React, { FormEvent } from 'react';

// Form Categories
import PersonalSection from './Personal';

// Stores
import { usePersonalDataStore } from '@/stores/registration/personal';
import { useAccountStore } from '@/stores/registration/account';

// Utils
import { signUpUser } from '@/services/auth/authService';

function RegistrationForm() {
  // Personal Info
  const { email, password } = useAccountStore();
  const { name, birthday } = usePersonalDataStore();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    console.log(name, email, password);

    const res = await signUpUser({
      personalData: { name, birthday, email, password },
    });

    console.log(res);
  };

  return (
    <form onSubmit={submitForm} className="w-3/5">
      <PersonalSection />

      {/* Academic Information */}
      {/* Professional Details */}
      {/* Privacy Consent */}
      {/* Terms and Condition */}

      <button
        type="submit"
        className="rounded-3xl bg-primary px-8 py-2 text-white "
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
