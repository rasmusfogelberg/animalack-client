import { apiHelper } from "../helpers/apiHelper";
import { ISinglePet } from "../types/pets";

export const petService = {
  getSinglePet,
};

function getSinglePet(petId: string): Promise<ISinglePet> {
  return apiHelper
    .get(`${process.env.REACT_APP_API_URL}/pets/${petId}`)
    .then((pet: any) => pet);
}
