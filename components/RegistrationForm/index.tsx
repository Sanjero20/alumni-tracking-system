import React, { FormEvent, useState } from 'react';

// Form Categories
import Personal from './Personal';

function RegistrationForm() {
  const submitForm = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submitForm} className="w-3/5">
      <Personal />
      {/* Academic Information */}
      {/* Professional Details */}
      {/* Privacy Consent */}
      {/* Terms and Condition */}
      {/* Submit */}
    </form>
  );
}

export default RegistrationForm;
