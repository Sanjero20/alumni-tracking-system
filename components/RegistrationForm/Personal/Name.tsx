import React from 'react';
import { usePersonalDataStore } from '@/stores/registration/personal';

function Name() {
  const { name, handleName } = usePersonalDataStore();

  return (
    <>
      <label>
        First Name
        <input
          type="text"
          name="first"
          value={name.first}
          onChange={(e) => handleName(e)}
          required
        />
      </label>

      <label>
        Middle Name
        <input
          type="text"
          name="middle"
          value={name.middle}
          onChange={(e) => handleName(e)}
          required
        />
      </label>

      <label>
        Last Name
        <input
          type="text"
          name="last"
          value={name.last}
          onChange={(e) => handleName(e)}
          required
        />
      </label>
    </>
  );
}

export default Name;
