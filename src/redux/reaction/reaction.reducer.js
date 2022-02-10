import {
  FETCH_REACTIONSDATA_LOADING,
  FETCH_REACTIONSDATA_SUCCESS,
  FETCH_REACTIONSDATA_FAILED,
} from "./reaction.types";

const initialState = {
  reactionsData: {
    isLoading: false,
    isError: false,
    status: "idle",
    data:[],
    message:''

  },
};

const reactionReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REACTIONSDATA_LOADING:
      return {
        ...state,
        reactionsData: {
          ...state.reactionsData,
          isLoading: true,
          isError: false,
          status: "loading",
        },
      };
    case FETCH_REACTIONSDATA_SUCCESS:
      return {
        ...state,
        reactionsData: {
          ...state.reactionsData,
          status: "success",
          isLoading: false,
          isError: false,
          data:payload.data,
          message:payload.message
        },
      };
      case FETCH_REACTIONSDATA_FAILED:
        return {
          ...state,
          reactionsData: {
            ...state.reactionsData,
            status: "failed",
            isLoading: false,
            isError: true,
            message:payload
          },
        };
    default:
      return state;
  }
};

export default reactionReducer;
