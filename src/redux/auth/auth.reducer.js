import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_FAILED , LOGOUT } from "./auth.types";

const INITIAL_STATE = {
  status: "idle",
  isLogged: false,
  userId: null,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
          ...state,
        status: "success",
        isLogged:true,
        userId: payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        status: "failed",
      };
    case LOGIN_ERROR:
      return {
        ...state,
        status: "error",
      };
      case LOGOUT:
      return {
       INITIAL_STATE
      };
    default:
      return state;
  }
};
export default authReducer;
