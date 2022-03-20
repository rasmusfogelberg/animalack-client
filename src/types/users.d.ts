export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  pets: IPet[];
}

export interface IPetUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
}
