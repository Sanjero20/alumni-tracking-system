// Registration

// Personal Info
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

// Complete registration structure
export type AccountRegister = {
  personalData: {
    name: Name;
    birthday: Birthday;
  };
  accountData: {
    email: string;
    password: string;
  };
};
