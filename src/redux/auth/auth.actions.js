import { LOGIN_SUCCESS, LOGOUT } from "./auth.types";

export const loginSuccess = (userId) => {
  return {
    type: LOGIN_SUCCESS,
    payload: userId,
  };
};
export const logout = () => {
  return {
    type: LOGOUT,
  };
};
