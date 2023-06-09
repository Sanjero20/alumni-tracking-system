import React from 'react';
import { useNameStore } from '@/stores/registration/personal/name';

function Name() {
  const { name, handleName } = useNameStore();

  return (
    <fieldset>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="first"
          value={name.first}
          onChange={(e) => handleName(e)}
          required
        />
      </div>

      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middle"
          value={name.middle}
          onChange={(e) => handleName(e)}
          required
        />
      </div>

      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="last"
          value={name.last}
          onChange={(e) => handleName(e)}
          required
        />
      </div>
    </fieldset>
  );
}

export default Name;
