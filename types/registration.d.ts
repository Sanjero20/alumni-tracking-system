import { Name, Birthday, AcadInfo, Credentials } from './account';

type PersonalType = {
  name: Name;
  birthday: Birthday;
};

export type AccountRegister = {
  personalData: PersonalType;
  accountData: Credentials;
  role?: string;
};
