import React from 'react';
import { useNameStore } from '@/stores/name';
import { useAccountStore } from '@/stores/account';

function Personal() {
  const { name, setName } = useNameStore();
  const { email, handleEmail } = useAccountStore();
  const { password, handlePassword } = useAccountStore();

  return (
    <>
      <h1 className="text-xl font-bold">Personal Information</h1>
      <fieldset>
        <label>
          First Name
          <input
            type="text"
            name="first"
            value={name.first}
            onChange={(e) => setName(e)}
            required
          />
        </label>

        <label>
          Middle Name
          <input
            type="text"
            name="middle"
            value={name.middle}
            onChange={(e) => setName(e)}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            name="last"
            value={name.last}
            onChange={(e) => setName(e)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="Email"
            value={email}
            onChange={(e) => handleEmail(e)}
            required
          />
        </label>
      </fieldset>
    </>
  );
}

export default Personal;
