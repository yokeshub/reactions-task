import React, { useReducer, useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import reactionsReducer from "./reactify.reducer";
import {
  addReaction,
  getContentReaction,
  setupAllReactions,
  removeReaction,
} from "./reactify.actions";
import emoji from "../../assets/emoji.svg";
import {
  ReactorContainer,
  MainReactContainer,
  Reactor,
  EmojiImg,
  ReactionBox,
  ReactionsWrap,
  EmojiReact,
  EmojiTextBox,
  ReactedBoxContainer,
  ReactedBox,
  ReactedCount,
  ReactedEmoji,
  ReactedListBox,
  ReactedPerson,
} from "./styles";
const INITIAL_STATE = {
  isOpen: false,
  initialized: false,
  reactions: {},
  contentReaction: {
    status: "idle",
    isLoading: false,
    isSuccess: false,
    data: null,
    processedReactions: null,
    message: null,
  },
  addReaction: {
    status: "idle",
    isLoading: false,
    isSuccess: false,
    message: null,
  },
  removeReaction: {
    status: "idle",
    isLoading: false,
    isSuccess: false,
    message: null,
  },
};

const Reaction = ({ reactionsData, contentId, userId }) => {
  const [state, dispatch] = useReducer(reactionsReducer, INITIAL_STATE);
  useEffect(() => {
    dispatch(setupAllReactions(reactionsData.data));
    dispatch(getContentReaction(dispatch, contentId, userId));
  }, [reactionsData]);
  console.log(state, "my state");
  return (
    <ReactorContainer>
      {state.initialized &&
      state.contentReaction.processedReactions &&
      state.contentReaction.processedReactions.length > 0 ? (
        state.contentReaction.processedReactions
          .filter((prct) => prct.count > 0)
          .map((emoj) => {
            return (
              <ReactedBoxContainer
                activated={emoj.reacted}
                onClick={() => {
                  const userFilteredData = state.contentReaction.data.filter(
                    (cr) => cr.user_id === userId && emoj.id === cr.reaction_id
                  );
                  if (
                    emoj.reacted &&
                    userFilteredData !== undefined &&
                    userFilteredData.length > 0
                  ) {
                    for (let x of userFilteredData) {
                      dispatch(
                        removeReaction(
                          dispatch,
                          {
                            user_id: userId,
                            content_id: contentId,
                            reaction_id: x.reaction_id,
                          },
                          x.id,
                          true
                        )
                      );
                    }
                  }
                }}
              >
                <ReactedBox>
                  <ReactedEmoji>{emoj.emoji}</ReactedEmoji>
                  <ReactedCount>{emoj.count}</ReactedCount>
                </ReactedBox>
                <ReactedListBox>
                  <ReactedPerson head>Reacted list</ReactedPerson>
                  {emoj.reactedList.map((rd) => {
                    return <ReactedPerson>{rd.user_id}</ReactedPerson>;
                  })}
                </ReactedListBox>
              </ReactedBoxContainer>
            );
          })
      ) : (
        <BeatLoader size={12} margin={2} color="#6c7dfe" />
      )}
      <MainReactContainer>
        <Reactor
          type="button"
          onClick={() => {
            dispatch({ type: "SET_OPEN" });
          }}
        >
          <EmojiImg src={emoji} />
        </Reactor>
        <ReactionBox show={state.isOpen}>
          <ReactionsWrap>
            {state.contentReaction.processedReactions &&
            state.contentReaction.processedReactions.length > 0 ? (
              state.contentReaction.processedReactions.map((emoj) => {
                return (
                  <EmojiReact
                    key={emoj.id}
                    disabled={
                      state.addReaction.status === "loading" ||
                      state.removeReaction.status === "loading"
                    }
                    onClick={() => {
                      const userFilteredData =
                        state.contentReaction.data.filter(
                          (cr) => cr.user_id === userId
                        );

                      if (
                        emoj.reacted &&
                        userFilteredData !== undefined &&
                        userFilteredData.length > 0
                      ) {
                        for (let x of userFilteredData) {
                          dispatch(
                            removeReaction(
                              dispatch,
                              {
                                user_id: userId,
                                content_id: contentId,
                                reaction_id: x.reaction_id,
                              },
                              x.id,
                              true
                            )
                          );
                        }
                      } else if (
                        userFilteredData !== undefined &&
                        userFilteredData.length > 0
                      ) {
                        for (let x of userFilteredData) {
                          dispatch(
                            removeReaction(
                              dispatch,
                              {
                                user_id: userId,
                                content_id: contentId,
                                reaction_id: x.reaction_id,
                              },
                              x.id,
                              false
                            )
                          );
                        }
                        dispatch(
                          addReaction(dispatch, {
                            user_id: userId,
                            content_id: contentId,
                            reaction_id: emoj.id,
                          })
                        );
                      } else {
                        dispatch(
                          addReaction(dispatch, {
                            user_id: userId,
                            content_id: contentId,
                            reaction_id: emoj.id,
                          })
                        );
                      }
                    }}
                  >
                    {emoj.emoji}
                    <EmojiTextBox>
                      <p>{emoj.name}</p>
                    </EmojiTextBox>
                  </EmojiReact>
                );
              })
            ) : (
              <BeatLoader size={12} margin={2} color="#6c7dfe" />
            )}
          </ReactionsWrap>
        </ReactionBox>
      </MainReactContainer>
    </ReactorContainer>
  );
};

export default Reaction;
