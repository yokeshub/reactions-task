export function setupReactionsData(reactions, reactedList, userId) {
  return (
    reactions &&
    reactions.map(function (obj) {
      const reactionFound = reactedList.filter(
        (rct) => rct.reaction_id === obj.id
      );
      if (
        obj.id !== undefined &&
        reactionFound !== undefined &&
        reactionFound.length > 0
      ) {
        const user_reaction = reactionFound.find(
          (rf) => rf.user_id === userId
        );
        return {
          ...obj,
          count: reactionFound.length,
          reacted:
            userId !== undefined &&
            user_reaction !== undefined &&
            user_reaction !== -1 &&
            userId === user_reaction.user_id,
          reactedList: reactionFound,
        };
      } else {
        return {
          ...obj,
          count: 0,
          reacted: false,
          reactedList: [],
        };
      }
    })
  );
}
