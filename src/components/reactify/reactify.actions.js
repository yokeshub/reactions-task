import {
  SETUP_REACTIONS,
  GET_CONTENT_REACTIONS_LOADING,
  GET_CONTENT_REACTIONS_SUCCESS,
  GET_CONTENT_REACTIONS_FAILED,
  GET_CONTENT_REACTIONS_ERROR,
  ADD_REACTION_LOADING,
  ADD_REACTION_SUCCESS,
  ADD_REACTION_FAILED,
  ADD_REACTION_ERROR,
  PRESET_ADD_REACTION,
  REMOVE_REACTION_LOADING,
  REMOVE_REACTION_ERROR,
  REMOVE_REACTION_FAILED,
  REMOVE_REACTION_SUCCESS,
  PRESET_REMOVE_REACTION
} from "./reactify.types";
import axios from "axios";
import { API_ROUTES, API_ENDPOINT } from "../../routes/apiRoutes";

export const setupAllReactions = (reactions) => {
  return {
    type: SETUP_REACTIONS,
    payload: { reactions },
  };
};

export const setupReactions = (reactions, reactedList) => {
  return {
    type: SETUP_REACTIONS,
    payload: { reactions, reactedList },
  };
};

export const getContentReaction = (dispatch, contentId, userId) => {
  dispatch({
    type: GET_CONTENT_REACTIONS_LOADING,
  });
  return axios
    .get(API_ENDPOINT + API_ROUTES.USER_CONTENT_REACTION, {
      params: {
        content_id: contentId,
        // user_id: userId,
      },
    })
    .then(
      (response) => {
        const { data } = response;
        console.log(data);
        if (data !== undefined) {
          dispatch({
            type: GET_CONTENT_REACTIONS_SUCCESS,
            payload: {
              status: "success",
              userId:userId,
              data: data,
              isSuccess: true,
              message: `fetched content reactions`,
            },
          });
        } else {
          dispatch({
            type: GET_CONTENT_REACTIONS_FAILED,
            payload: {
              status: "failed",
              isSuccess: false,
              message: `fetch content reactions failed `,
            },
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
          type: GET_CONTENT_REACTIONS_ERROR,
          payload: { message: `content reactions error:` + message },
        });
      }
    );
};

export const addReaction = (dispatch, values) => {
  // dispatch({
  //   type: PRESET_ADD_REACTION,
  //   payload: { reactionId: values.reaction_id },
  // });
  dispatch({
    type: ADD_REACTION_LOADING,
    payload: {
      type: values.status,
    },
  });
  return axios
    .post(API_ENDPOINT + API_ROUTES.USER_CONTENT_REACTION, values)
    .then(
      (response) => {
        const { data } = response;
        console.log(data);
        if (data !== undefined && data.id !== undefined) {
          dispatch({
            type: ADD_REACTION_SUCCESS,
            payload: {
              status: "success",
              isSuccess: true,
              message: `${data.id} react added`,
            },
          });
          dispatch(
            getContentReaction(dispatch, values.content_id, values.user_id)
          );
        } else {
          dispatch({
            type: ADD_REACTION_FAILED,
            payload: {
              status: "failed",
              isSuccess: false,
              message: `${data.id} react add failed `,
            },
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
          type: ADD_REACTION_ERROR,
          payload: { message: `react add error:` + message },
        });
      }
    );
};

function isEmptyObject(value) {
  return Object.keys(value).length === 0 && value.constructor === Object;
}


export const removeReaction = (dispatch, values, ucId,getUpdated) => {
  // dispatch({
  //   type: PRESET_REMOVE_REACTION,
  //   payload: { reactionId: values.reaction_id },
  // });
  dispatch({
    type: REMOVE_REACTION_LOADING,
  });
  return axios
    .delete(API_ENDPOINT + API_ROUTES.USER_CONTENT_REACTION+`/${ucId}`)
    .then(
      (response) => {
        const { data } = response;
        if (data !== undefined && isEmptyObject(data)) {
          dispatch({
            type: REMOVE_REACTION_SUCCESS,
            payload: {
              status: "success",
              isSuccess: true,
              message: `${data.id} react removed`,
            },
          });
          if(getUpdated){
          dispatch(
            getContentReaction(dispatch, values.content_id, values.user_id)
          );
          }
        } else {
          dispatch({
            type: REMOVE_REACTION_FAILED,
            payload: {
              status: "failed",
              isSuccess: false,
              message: `${data.id} react remove failed `,
            },
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
          type: ADD_REACTION_ERROR,
          payload: { message: `react add error:` + message },
        });
      }
    );
};