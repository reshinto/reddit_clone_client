import React, { useRef } from "react";
import Articles from "./Articles";
import "./CommentsModal.css";

export default ({ postId }) => {
  const commentModal = useRef();
  return (
    <>
      <div
        ref={commentModal}
        // close when clicked anywhere (commented out to prevent so)
        // onClick={() => (modal.current.style.display = "none")}
        id="id02"
        className="comments-modal"
      >
        <span
          onClick={() => (commentModal.current.style.display = "none")}
          className="close"
          title="Close Modal"
        >
          &times;
        </span>
        <div className="comment-modal-content">
          <p className="comment-modal-title">Comments</p>
          <Articles type="comments" postId={postId} />;
        </div>
      </div>
    </>
  );
};
