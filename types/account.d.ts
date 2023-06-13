// Personal Data
export type Name = {
  first: string;
  middle: string;
  last: string;
};

export type Birthday = {
  month: string;
  day: string;
  year: string;
};

// Academic Info
export type Course = {
  campus: string;
  college: string;
  program: string;
};

export type AcadYear = {
  yearStarted: number | string;
  yearGraduated: number | string;
};

export type AcadAccount = {
  srCode: string;
  bsuEmail: string;
};

// Email and Password
export type Credentials = {
  email: string;
  password: string;
};

// Data format that will be stored in the database
export type AccountType = {
  id: string;

  profile: {
    name: Name;
    birthday: Birthday;
  };

  academicData: {
    course: Course;
    year: AcadYear;
    account: AcadAccount;
  };

  account: {
    permission: string;
    email: string;
    isVerified: boolean;
  };
};
