export interface IPet {
  id: string;
  name: string;
  species: string;
  breed: string;
  color: string;
  gender: number;
  dateOfBirth: Date;
}

export interface ISinglePet {
  id: string;
  name: string;
  species: string;
  breed: string;
  color: string;
  gender: string;
  dateOfBirth: Date;
  users: IPetUser[];
}
