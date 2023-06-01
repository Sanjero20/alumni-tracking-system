import React, { ChangeEvent, useState } from 'react';
import { Name, Birthday } from '@/utils/types';

function Personal() {
  const [name, setName] = useState<Name>();
  const [birthday, setBirthday] = useState<Birthday>();
  const [email, setEmail] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <>
      <h1 className="text-3xl font-bold">Personal Information</h1>
      <fieldset>
        <label>
          First Name
          <input
            type="text"
            value={name?.first}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </label>

        <label>
          Middle Name
          <input type="text" value={name?.middle} required />
        </label>

        <label>
          Last Name
          <input type="text" value={name?.last} required />
        </label>

        <label>
          Email
          <input
            type="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </fieldset>
    </>
  );
}

export default Personal;
