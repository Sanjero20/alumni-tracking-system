import React from 'react';
import { useNameStore } from '@/stores/registration/personal/name';

function Name() {
  const { name, handleName } = useNameStore();

  return (
    <fieldset>
      <div>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          name="first"
          id="first-name"
          value={name.first}
          onChange={(e) => handleName(e)}
          required
        />
      </div>

      <div>
        <label htmlFor="middle-name">Middle Name</label>
        <input
          type="text"
          name="middle"
          id="middle-name"
          value={name.middle}
          onChange={(e) => handleName(e)}
          required
        />
      </div>

      <div>
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          name="last"
          id="last-name"
          value={name.last}
          onChange={(e) => handleName(e)}
          required
        />
      </div>
    </fieldset>
  );
}

export default Name;
