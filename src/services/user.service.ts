import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import internal from "stream";
import { apiHelper } from "../helpers/apiHelper";
import { IUser } from "../types/users";

export const userService = {
  getUserPets,
};

function getUserPets(userId: string): Promise<IUser> {
  return apiHelper
    .get(`${process.env.REACT_APP_API_URL}/users/${userId}`)
    .then((user: any) => user);
}