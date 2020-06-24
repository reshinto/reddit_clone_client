import React from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";
import Score from "./Score";
import "./Article.css";
import { getPost } from "../redux/actions/postsActions";

// used for post and comment
export default (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { type } = props;
  let dateFormat;
  const { timestamp } = props.data;
  const currentDate = moment();
  const dataDate = moment(timestamp);
  const numOfYears = currentDate.diff(dataDate, "years");
  const numOfMonths = currentDate.diff(dataDate, "months");
  const numOfDays = currentDate.diff(dataDate, "days");
  const numOfHours = currentDate.diff(dataDate, "hours");
  const numOfMinutes = currentDate.diff(dataDate, "minutes");
  const numOfSeconds = currentDate.diff(dataDate, "seconds");

  if (numOfYears > 0) {
    dateFormat = `${numOfYears} ${numOfYears > 1 ? "years" : "year"}`;
  } else if (numOfMonths > 0) {
    dateFormat = `${numOfMonths} ${numOfMonths > 1 ? "months" : "month"}`;
  } else if (numOfDays > 0) {
    dateFormat = `${numOfDays} ${numOfDays > 1 ? "days" : "day"}`;
  } else if (numOfHours > 0) {
    dateFormat = `${numOfHours} ${numOfHours > 1 ? "hours" : "hour"}`;
  } else if (numOfMinutes > 0) {
    dateFormat = `${numOfMinutes} ${numOfMinutes > 1 ? "minutes" : "minute"}`;
  } else {
    dateFormat = `${numOfSeconds} ${numOfSeconds > 1 ? "seconds" : "second"}`;
  }

  let data;
  if (type === "posts") {
    const {
      id,
      comments: commentsCount,
      owner,
      score,
      title,
      url,
      vote,
    } = props.data;

    data = (
      <>
        <Score score={score} postId={id} vote={vote} />
        <div>
          <p>
            <span
              className="article-title"
              onClick={() => {
                dispatch(getPost(id));
                history.push(`/posts/${id}`);
              }}
            >
              {title}
            </span>
            <span className="url-text">({url})</span>
          </p>
          <p className="owner">
            submitted {dateFormat} ago by <span>{owner || "anonymous"}</span>
          </p>
          <p className="post-others">
            <span className="post-others-comments">{`${commentsCount} comments`}</span>{" "}
            <span className="post-others-spacing">
              <span>share</span> <span>save</span> <span>hide</span>{" "}
              <span>report</span> <span>crosspost</span> <span>pocket</span>
            </span>
          </p>
        </div>
      </>
    );
  } else {
    const { id: commentId, text, score, vote, owner } = props.data;
    const { post_id } = props;
    data = (
      <>
        <Score
          score={score}
          postId={post_id}
          vote={vote}
          commentId={commentId}
        />
        <div>
          <p>
            <span className="article-title">{text}</span>
          </p>
          <p className="owner">
            commented {dateFormat} ago by <span>{owner || "anonymous"}</span>
          </p>
        </div>
      </>
    );
  }
  return <div className="article-container">{data}</div>;
};
