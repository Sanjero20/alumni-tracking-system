/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { fetchCampuses } from '@/services/request';
import { Campus } from '@/types/campus';
import { useCourseStore } from '@/stores/registration/academic/course';

type CampusType = {
  campusId: string;
  name: string;
};

type CollegeType = {
  collegeId: string;
  name: string;
};

function Course() {
  const { course, handleCourse } = useCourseStore();
  const { resetCourse, resetCollege, resetProgram } = useCourseStore();

  const [campusesInfo, setCampusesInfo] = useState<Campus[]>([]);

  const [campuses, setCampuses] = useState<CampusType[]>([]);
  const [colleges, setColleges] = useState<CollegeType[]>([]);
  const [programs, setPrograms] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchCampuses();

      if (!data) return;
      setCampusesInfo(data);

      // Only get the campusId and name for each item
      const mappedCampuses = data.map((campus) => {
        const { campusId, name } = campus;
        return {
          campusId,
          name,
        };
      });

      setCampuses(mappedCampuses);
    };

    getData();
  }, []);

  // Change colleges based on selected campus
  useEffect(() => {
    // Reset values to none when switching campuses
    resetCollege();
    resetProgram();
    setColleges([]);
    setPrograms([]);

    if (campusesInfo.length === 0) return;
    if (course.campus === '') {
      resetCourse();
      return;
    }

    // Only get the campus info that matches the selected campus
    const filteredCampus = campusesInfo.filter(
      (campus) => campus.name === course.campus
    );

    const colleges = filteredCampus[0].colleges;
    setColleges(colleges);
  }, [course.campus]);

  // Change program based on selected college
  useEffect(() => {
    resetProgram();
    setPrograms([]);

    if (course.college === '') return;

    // Only get the campus info that matches the selected campus
    const filteredCampus = campusesInfo.filter(
      (campus) => campus.name === course.campus
    );

    // Filter based on selected campus
    const colleges = filteredCampus[0].colleges;
    const selectedCollege = colleges.filter(
      (college) => college.name === course.college
    );

    // Get the programs that matches the selected college
    const programs = selectedCollege[0].programs;
    setPrograms(programs);
  }, [course.college]);

  return (
    <fieldset>
      <div className="flex flex-col">
        <label htmlFor="campus">Campus</label>
        <select
          name="campus"
          id="campus"
          value={course.campus}
          onChange={(e) => handleCourse(e)}
          required
        >
          <option value="">Select Campus</option>
          {campuses.length > 0 &&
            campuses.map((campus: CampusType) => (
              <option value={campus.name} key={campus.campusId}>
                {campus.name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="college">College</label>
        <select
          name="college"
          id="college"
          value={course.college}
          onChange={(e) => handleCourse(e)}
          required
        >
          <option value="">Select College</option>
          {colleges.length > 0 &&
            colleges.map((college) => (
              <option value={college.name} key={college.collegeId}>
                {college.name}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="program">Degree/Certification & Major</label>
        <select
          name="program"
          id="program"
          value={course.program}
          onChange={(e) => handleCourse(e)}
          required
        >
          <option value="">Select Program </option>
          {programs.length > 0 &&
            programs.map((program) => (
              <option value={program} key={program}>
                {program}
              </option>
            ))}
        </select>
      </div>
    </fieldset>
  );
}

export default Course;
