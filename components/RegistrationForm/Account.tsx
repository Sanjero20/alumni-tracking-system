import { useAccountStore } from '@/stores/registration/account';
import React from 'react';

function AccountInfo() {
  const { email, handleEmail } = useAccountStore();
  const { password, handlePassword } = useAccountStore();

  return (
    <div>
      <h1 className="title">Account Information</h1>

      <fieldset>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => handleEmail(e)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => handlePassword(e)}
          required
        />
      </fieldset>
    </div>
  );
}

export default AccountInfo;
