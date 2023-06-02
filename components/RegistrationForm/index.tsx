import React, { FormEvent, useState } from 'react';

// Form Categories
import Personal from './Personal';

// Stores
import { useNameStore } from '@/stores/name';
import { useAccountStore } from '@/stores/account';

function RegistrationForm() {
  // Personal Info
  const { name } = useNameStore();
  const { email, password } = useAccountStore();

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();

    console.log(name, email, password);

    // createAccount(account);
  };

  return (
    <form onSubmit={submitForm} className="w-3/5">
      <Personal />
      {/* Academic Information */}
      {/* Professional Details */}
      {/* Privacy Consent */}
      {/* Terms and Condition */}
      {/* Submit */}

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
