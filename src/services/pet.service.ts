import { apiHelper } from "../helpers/apiHelper";
import { ISinglePet } from "../types/pets";

/* 
 * CRUD for the Pet entity
 *
 * 
 *  */

export const petService = {
  getAllPets,
  getSinglePet,
  addPet,
  updatePet,
  deletePet,
};

function getAllPets(): Promise<any> {
  return apiHelper
  .get(`${process.env.REACT_APP_API_URL}/pets/`)
  .then((pet: any) => pet)
  .catch((error) => error);
}

function getSinglePet(petId: string): Promise<ISinglePet> {
  return apiHelper
    .get(`${process.env.REACT_APP_API_URL}/pets/${petId}`)
    .then((pet: any) => pet)
    .catch((error) => error);
}

function addPet(newPet: ISinglePet): Promise<any> {
  return apiHelper
    .post(`${process.env.REACT_APP_API_URL}/pets/register`, newPet)
    .then((response: any) => response)
    .catch((error) => error);
}

function updatePet(updatedPet: ISinglePet): Promise<any> {
  return apiHelper
    .put(`${process.env.REACT_APP_API_URL}/pets/${updatedPet.id}`, updatedPet)
    .then((response: any) => response)
    .catch((error) => error);
}

function deletePet(petId: string): Promise<any> {
  return apiHelper
    .delete(`${process.env.REACT_APP_API_URL}/pets/${petId}`)
    .then((response: any) => response)
    .catch((error) => error);
}
