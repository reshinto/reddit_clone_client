import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import moment from "moment";
import { getPost, deletePost } from "../redux/actions/postsActions";
import Form from "../components/Form";
import { getComments, addComment } from "../redux/actions/commentsActions";
import Articles from "../components/Articles";
import { setSubtitle } from "../redux/actions/headerActions";
import "./ViewPostPage.css";

export default (props) => {
  const [commentText, setCommentText] = useState("");
  let post = useSelector((state) => state.postsReducer.post);
  const dispatch = useDispatch();
  const { postId } = useParams();
  const history = useHistory();
  const user =
    localStorage.getItem("user") === "" ? null : localStorage.getItem("user");
  useEffect(() => {
    dispatch(setSubtitle("View Post"));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getComments(postId));
    if (post.length === 0) {
      dispatch(getPost(postId));
    }
  }, [dispatch, postId, post.length]);

  let postData;
  let owner;
  if (post.length === 0) {
    postData = null;
  } else {
    const { title, url, timestamp } = post[0];
    owner = post[0].owner;
    let dateFormat;
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
    postData = (
      <div className="post-main">
        <h2>{title || ""}</h2>
        <p>{url || ""}</p>
        <p>
          last modifed {dateFormat} ago by{" "}
          {owner !== null ? owner : "anonymous"}
        </p>
      </div>
    );
  }

  const handleDelete = () => {
    dispatch(deletePost(postId));
    history.goBack();
  };

  const handleSubmit = () => {
    dispatch(addComment(postId, commentText));
    setCommentText("");
  };

  return (
    <>
      <div className="post-contents">
        {postData}
        <div>
          <div className="post-buttons">
            {owner === user ? (
              <button
                className="post-edit"
                onClick={() => history.push(`/posts/edit/${postId}`)}
              >
                edit
              </button>
            ) : null}
            {owner === user || owner === null ? (
              <button className="post-delete" onClick={handleDelete}>
                delete
              </button>
            ) : null}
          </div>
          <Form
            type="textarea"
            input1="comment"
            input1placeholder="Leave a comment"
            handleInput1Change={(v) => setCommentText(v)}
            input1Value={commentText}
            submitAction={handleSubmit}
            path={`/${postId}`}
          />
        </div>
      </div>
      <div className="post-comments">
        <Articles type="comments" postId={postId} />
      </div>
    </>
  );
};
