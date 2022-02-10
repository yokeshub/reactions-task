import produce from "immer";
import {
  GET_CONTENT_REACTIONS_LOADING,
  GET_CONTENT_REACTIONS_SUCCESS,
  GET_CONTENT_REACTIONS_FAILED,
  GET_CONTENT_REACTIONS_ERROR,
  PRESET_ADD_REACTION,
  ADD_REACTION_FAILED,
  ADD_REACTION_LOADING,
  ADD_REACTION_SUCCESS,
  REMOVE_REACTION_LOADING,
  REMOVE_REACTION_ERROR,
  REMOVE_REACTION_FAILED,
  REMOVE_REACTION_SUCCESS,
  PRESET_REMOVE_REACTION,
  SETUP_REACTIONS,
} from "./reactify.types";
import { setupReactionsData } from "./reactify.utils";
const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_OPEN":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case SETUP_REACTIONS:
      return {
        ...state,
        reactions: payload.reactions,
      };

    // to get content specific reactions
    case GET_CONTENT_REACTIONS_LOADING:
      return {
        ...state,
        contentReaction: {
          ...state.contentReaction,
          status: "loading",
          isLoading: true,
        },
      };
    case GET_CONTENT_REACTIONS_SUCCESS:
      return {
        ...state,
        initialized: true,
        contentReaction: {
          ...state.contentReaction,
          status: "success",
          data: payload.data,
          processedReactions: setupReactionsData(
            state.reactions,
            payload.data,
            payload.userId
          ),
          isSuccess: payload.isSuccess,
          isLoading: false,
          message: payload.message,
        },
      };
    case GET_CONTENT_REACTIONS_FAILED:
      return {
        ...state,
        contentReaction: {
          ...state.contentReaction,
          status: "failed",
          isSuccess: payload.isSuccess,
          isLoading: false,
          message: payload.message,
        },
      };

    //   to add reaction
    case PRESET_ADD_REACTION:
      return {
        ...state,
        contentReaction: {
          ...state.contentReaction,
          processedReactions: produce(
            state.contentReaction.processedReactions,
            (draft) => {
              let processedReaction = draft.find(
                (reaction) => reaction.id === payload.reactionId
              );
              // processedReaction = draft.map(function (obj) {
              //   return {
              //     ...obj,
              //     reacted: false,
              //   };
              // });
              if (
                processedReaction !== undefined &&
                processedReaction.count !== undefined &&
                processedReaction.reacted !== undefined
              ) {
                processedReaction.count += 1;
                processedReaction.reacted = true;
              }
            }
          ),
        },
      };

    case ADD_REACTION_LOADING:
      return {
        ...state,
        addReaction: {
          ...state.addReaction,
          status: "loading",
          isLoading: true,
        },
      };
    case ADD_REACTION_SUCCESS:
      return {
        ...state,
        addReaction: {
          ...state.addReaction,
          status: "success",
          isSuccess: payload.isSuccess,
          isLoading: false,
          message: payload.message,
        },
      };
    case ADD_REACTION_FAILED:
      return {
        ...state,
        addReaction: {
          ...state.addReaction,
          status: "failed",
          isSuccess: payload.isSuccess,
          isLoading: false,
          message: payload.message,
        },
      };
    //   to remove reaction
    case PRESET_REMOVE_REACTION:
      return {
        ...state,
        contentReaction: {
          ...state.contentReaction,
          processedReactions: produce(
            state.contentReaction.processedReactions,
            (draft) => {
              let processedReaction = draft.find(
                (reaction) => reaction.id === payload.reactionId
              );
              // let reactedReactions = draft.filter((rc) => rc.reacted === true);

              // reactedReactions = reactedReactions.map(function (obj) {
              //   return {
              //     ...obj,
              //     reacted: false,
              //   };
              // });
              if (
                processedReaction !== undefined &&
                processedReaction.count !== undefined &&
                processedReaction.reacted !== undefined
              ) {
                processedReaction.count -= 1;
                processedReaction.reacted = false;
              }
              
            }
          ),
        },
      };

    case REMOVE_REACTION_LOADING:
      return {
        ...state,
        removeReaction: {
          ...state.removeReaction,
          status: "loading",
          isLoading: true,
        },
      };
    case REMOVE_REACTION_SUCCESS:
      return {
        ...state,
        removeReaction: {
          ...state.removeReaction,
          status: "success",
          isSuccess: payload.isSuccess,
          isLoading: false,
          message: payload.message,
        },
      };
    case REMOVE_REACTION_FAILED:
      return {
        ...state,
        removeReaction: {
          ...state.removeReaction,
          status: "failed",
          isSuccess: payload.isSuccess,
          isLoading: false,
          message: payload.message,
        },
      };
    default:
      return state;
  }
};
export default reducer;
