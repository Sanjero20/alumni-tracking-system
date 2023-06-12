import Course from './Course';
import AcademicYear from './AcademicYear';
import SchoolAccount from './SchoolAccount';

function AcademicInfo() {
  return (
    <div>
      <h1 className="title">Academic Information</h1>

      <div className="flex flex-col gap-1">
        <Course />
        <AcademicYear />
        <SchoolAccount />
      </div>
    </div>
  );
}

export default AcademicInfo;
