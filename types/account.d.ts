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

// Email and Password
export type Credentials = {
  email: string;
  password: string;
};

// Data format that will be stored in the database
export type AccountType = {
  id: string;
  permission: 'user' | 'admin';

  profile: {
    name: Name;
    birthday: Birthday;
  };

  academicData: {
    course: Course;
    year: AcadYear;
  };

  accountData: {
    email: string;
    isVerified: boolean;
  };
};
