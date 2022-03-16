import { apiHelper } from "../helpers/apiHelper";
import { User } from "./user.service";

export interface SinglePet {
  id: string;
  name: string;
  breed: string;
  color: string;
  gender: string;
  users: PetUser[];
}

export interface PetUser {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
}

export const userService = {
  getSinglePet,
};

function getSinglePet(petId: string): Promise<SinglePet> {
  return apiHelper
    .get(`${process.env.REACT_APP_API_URL}/pets/${petId}`)
    .then((pet: any) => pet);
}
