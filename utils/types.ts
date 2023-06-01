export type Account = {
  id: string;
  name: string;
  email: string;
};

// For account registration
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

export type RegisterAccount = {
  name: Name;
  birthday: Birthday;
};
