import { apiHelper } from "../helpers/apiHelper";

export interface Pet {
  id: string;
  name: string;
  breed: string;
  color: string;
  gender: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  pets: Pet[];
}

export const userService = {
  getUserPets,
};

function getUserPets(userId: string): Promise<User> {
  return apiHelper
    .get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
    .then((user: any) => user);
}
