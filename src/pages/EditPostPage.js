import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editPost } from "../redux/actions/postsActions";
import { getPost } from "../redux/actions/postsActions";
import Form from "../components/Form";
import { setSubtitle } from "../redux/actions/headerActions";
import useValidation from "../customHooks/useValidation";

export default (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const { postId } = useParams();
  const { error, setError, initialState } = useValidation({ title, url });
  const post = useSelector((state) => state.postsReducer.post);
  const postLength = post.length;
  const postTitle = post[0].title;
  const postUrl = post[0].url;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSubtitle("Edit Post"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPost(postId));
    if (postLength > 0) {
      setTitle(postTitle);
      setUrl(postUrl);
    }
  }, [dispatch, postLength, postId, postTitle, postUrl]);

  const handleSubmit = () => {
    if (error.isValid) {
      dispatch(editPost(title, url, postId));
      setError(initialState);
    }
  };

  return (
    <>
      <Form
        type="text"
        input1="title"
        handleInput1Change={(v) => setTitle(v)}
        input1Value={title}
        input1error={error.titleError}
        input2="url"
        handleInput2Change={(v) => setUrl(v)}
        input2Value={url}
        input2error={error.urlError}
        submitAction={handleSubmit}
        path={`/${postId}`}
      />
    </>
  );
};
