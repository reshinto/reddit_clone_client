import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../redux/actions/postsActions";
import Articles from "../components/Articles";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <main>
      <Articles type="posts" />
    </main>
  );
};
