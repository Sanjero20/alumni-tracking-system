import {
  Name,
  Birthday,
  AcadInfo,
  Credentials,
  Course,
  AcadYear,
  AcadAccount,
} from './account';

type PersonalType = {
  name: Name;
  birthday: Birthday;
};

type AcademicType = {
  course: Course;
  year: AcadYear;
  account: AcadAccount;
};

export type AccountRegister = {
  personalData: PersonalType;
  academicData: AcademicType;
  accountData: Credentials;
};
