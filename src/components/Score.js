import React from "react";
import { useDispatch } from "react-redux";
import { putVote } from "../redux/actions/voteActions";
import Vote from "./Vote";
import "./Score.css";

export default (props) => {
  const { score, postId, vote, commentId } = props;
  const dispatch = useDispatch();
  return (
    <div className="score-container">
      <Vote
        postId={postId}
        type="up"
        vote={vote}
        voteAction={() => dispatch(putVote(postId, "up", commentId))}
        commentId={commentId}
      />
      <p>{score > 1000 ? `${(score / 1000).toFixed(1)}k` : score}</p>
      <Vote
        postId={postId}
        type="down"
        vote={vote}
        voteAction={() => dispatch(putVote(postId, "down", commentId))}
        commentId={commentId}
      />
    </div>
  );
};
