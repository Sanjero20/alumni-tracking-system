import { useEffect, useState } from 'react';
import { fetchCampuses } from '@/services/request';
import { Campus } from '@/types/campus';
import { useCourseStore } from '@/stores/registration/academic/course';

function Course() {
  const { course, handleCourse } = useCourseStore();

  const [campusesInfo, setCampusesInfo] = useState<Campus[]>([]);

  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCampuses();
      if (!data) return;
      setCampusesInfo(data);
    };

    getData();
  }, []);

  // Display all campuses
  useEffect(() => {
    if (campusesInfo.length == 0) return;
  }, [campusesInfo]);

  return (
    <fieldset>
      <div className="flex flex-col">
        <label htmlFor="campus">Campus</label>
        <select name="campus" id="campus" required>
          <option value="">Select Campus</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="college">College</label>
        <select name="college" id="college">
          <option value="">Select College</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="program">Degree/Certification & Major</label>
        <select name="program" id="program">
          <option value="">Select Program </option>
        </select>
      </div>
    </fieldset>
  );
}

export default Course;
