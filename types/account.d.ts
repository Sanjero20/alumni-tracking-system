// Types for Account data

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
export type AcadInfo = {
  campus: string;
  college: string;
  program: string;
};

export type Year = {
  yearStarted: number;
  yearGraduated: number;
};

// Email and Password
export type Credentials = {
  email: string;
  password: string;
};
