import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Main from "../containers/Main";
import Aside from "../containers/Aside";
import { setTitle, setSubtitle } from "../redux/actions/headerActions";
import "./HomePage.css";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setTitle("space"));
    dispatch(setSubtitle("posts"));
  }, [dispatch]);
  return (
    <div className="homepage-container">
      <Main />
      <Aside />
    </div>
  );
};
