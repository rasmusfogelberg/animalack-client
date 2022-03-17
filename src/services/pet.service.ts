import { apiHelper } from "../helpers/apiHelper";
import { IUser } from "./user.service";

export interface ISinglePet {
  id: string;
  name: string;
  breed: string;
  color: string;
  gender: string;
  born: Date;
  users: IPetUser[];
}

export interface IPetUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
}

export const petService = {
  getSinglePet,
};

function getSinglePet(petId: string): Promise<ISinglePet> {
  return apiHelper
    .get(`${process.env.REACT_APP_API_URL}/pets/${petId}`)
    .then((pet: any) => pet);
}
