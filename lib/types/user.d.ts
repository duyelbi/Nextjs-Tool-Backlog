export interface IUser {
  id: number;
  userId: string | null;
  name: string;
  roleType: number;
  lang: string;
  mailAddress: string;
  nulabAccount: INulabAccount;
  keyword: string;
  lastLoginTime: string;
}
