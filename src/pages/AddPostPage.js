import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions/postsActions";
import Form from "../components/Form";
import { setSubtitle } from "../redux/actions/headerActions";
import useValidation from "../customHooks/useValidation";

export default () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const { error, setError, initialState } = useValidation({ title, url });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSubtitle("Add Post"));
  }, [dispatch]);

  const handleSubmit = () => {
    if (error.isValid) {
      dispatch(addPost(title, url));
      setTitle("");
      setUrl("");
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
        path=""
      />
    </>
  );
};
