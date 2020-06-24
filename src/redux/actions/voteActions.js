import * as actionTypes from "../types";
import { BASE_URL } from "../constants";
import { fail } from "./ultilities";
import { getPosts } from "./postsActions";
import { getComments } from "./commentsActions";

export const putVote = (postId, direction, comment_id) => async (dispatch) => {
  let sideURL;
  let type;
  let queryData;
  const user_id = Number(localStorage.getItem("userId"));
  if (comment_id) {
    if (direction === "up") {
      sideURL = "comments/upcommentvote";
      type = actionTypes.UP_COMMENT_VOTE;
    } else {
      sideURL = "comments/downcommentvote";
      type = actionTypes.DOWN_COMMENT_VOTE;
    }
    queryData = { user_id, comment_id };
  } else {
    if (direction === "up") {
      sideURL = "upvote";
      type = actionTypes.UP_VOTE;
    } else {
      sideURL = "downvote";
      type = actionTypes.DOWN_VOTE;
    }
    queryData = { user_id };
  }
  const queryURL = `posts/${postId}/${sideURL}`;
  const config = {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(queryData),
  };
  try {
    const res = await fetch(`${BASE_URL}${queryURL}`, config);
    const data = await res.json();
    dispatch({
      type,
      payload: data.message,
    });
  } catch (error) {
    dispatch(fail(error.message));
  }
  if (comment_id) {
    dispatch(getComments(postId));
  } else {
    dispatch(getPosts());
  }
};
