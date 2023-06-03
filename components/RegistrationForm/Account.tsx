import { useAccountStore } from '@/stores/registration/account';
import React from 'react';

function AccountInfo() {
  const { email, handleEmail } = useAccountStore();
  const { password, handlePassword } = useAccountStore();

  return (
    <fieldset>
      <h1 className="text-2xl font-bold">Account Information</h1>

      <label>
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => handleEmail(e)}
          required
        />
      </label>

      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => handlePassword(e)}
          required
        />
      </label>
    </fieldset>
  );
}

export default AccountInfo;
