export interface IPet {
  id: string;
  name: string;
  species: string;
  breed: string;
  color: string;
  gender: number;
  born: Date;
}

export interface ISinglePet {
  id: string;
  name: string;
  breed: string;
  color: string;
  gender: string;
  born: Date;
  users: IPetUser[];
}
