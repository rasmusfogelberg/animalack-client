import { apiHelper } from "../helpers/apiHelper";

export const authService = {
  login,
};

function login(username: string, password: string) {
  return apiHelper
    .post(`${process.env.REACT_APP_API_URL}/users/auth`, { username, password })
    .then((user) => {
      return user;
    });
}