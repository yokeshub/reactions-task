import {
  FETCH_REACTIONSDATA_LOADING,
  FETCH_REACTIONSDATA_SUCCESS,
  FETCH_REACTIONSDATA_FAILED,
  FETCH_REACTIONSDATA_ERROR,
} from "./reaction.types";
import axios from "axios";
import {  API_ROUTES } from "../../routes/apiRoutes";

export const getReactionsData =
  () =>
  (dispatch, getState, { endpoint }) => {
    dispatch({
      type: FETCH_REACTIONSDATA_LOADING,
    });
    return axios.get(endpoint + API_ROUTES.GET_ALL_REACTIONS).then(
      (response) => {
        const { data } = response;
        console.log(data);

        if (
          data &&
          data !== undefined &&
          data.data !== undefined &&
          data.data.length === 0
        ) {
          dispatch({
            type: FETCH_REACTIONSDATA_FAILED,
            payload: 'empty data',
          });
        } else {
          dispatch({
            type: FETCH_REACTIONSDATA_SUCCESS,
            payload:{data,message:'fetched reactions successfully!!'},
          });
        }
      },
      (error) => {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: FETCH_REACTIONSDATA_FAILED,
          payload: message,
        });
      }
    );
  };


