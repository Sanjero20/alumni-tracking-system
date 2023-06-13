import { Name, Birthday, AcadInfo, Credentials, Course, Year } from './account';

type PersonalType = {
  name: Name;
  birthday: Birthday;
};

type AcademicType = {
  course: Course;
  year: Year;
};

export type AccountRegister = {
  personalData: PersonalType;
  academicData: AcademicType;
  accountData: Credentials;
};
