import React from "react";
import { useSelector } from "react-redux";
import Article from "./Article";

// use for posts and comments
export default (props) => {
  const { type } = props;
  let arr;
  let data;
  if (type === "comments") {
    arr = useSelector((state) => state.commentsReducer.comments);
    if (arr.length > 0) {
      const { id: post_id } = arr[0];
      arr = arr[0].comments;
      data = arr.map((comment) => (
        <Article
          key={comment.id}
          post_id={post_id}
          data={comment}
          type={type}
          owner={arr.owner}
        />
      ));
    }
  } else {
    arr = useSelector((state) => state.postsReducer.posts);
    data = arr.map((post) => <Article key={post.id} data={post} type={type} />);
  }

  return <div className="articles-container">{data}</div>;
};
