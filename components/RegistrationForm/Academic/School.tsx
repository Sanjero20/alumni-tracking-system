import { useEffect, useState } from 'react';
import { fetchCampuses } from '@/services/request';

function School() {
  const [campuses, setCampuses] = useState<any>([]);

  useEffect(() => {
    const getCampuses = async () => {
      const data = await fetchCampuses();
      setCampuses(data);
    };

    getCampuses();
  }, []);

  return (
    <fieldset>
      <div className="flex flex-col">
        <label htmlFor="">Campus</label>
        <select name="" required>
          <option value="">Select Campus</option>
          {campuses.map((campus: any) => (
            <option key={campus.campusId} value={campus.name}>
              {campus.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="">College</label>
        <select name="">
          <option value="">Select College</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="">Degree/Certification & Major</label>
        <select name="">
          <option value="">Select Program </option>
        </select>
      </div>
    </fieldset>
  );
}

export default School;
