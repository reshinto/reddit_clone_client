import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import "./Alert.css";
import { clearMessage } from "../redux/actions/ultilities";

export default ({ status, message }) => {
  const dispatch = useDispatch();
  const parent = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (parent.current) {
        parent.current.style.opacity = "0";
        setTimeout(function () {
          if (parent.current) {
            parent.current.style.display = "none";
            dispatch(clearMessage());
          }
        }, 600);
      }
    }, 3000);
  }, [dispatch]);

  const handleClose = () => {
    if (parent.current) {
      parent.current.style.opacity = "0";
      setTimeout(function () {
        if (parent.current) {
          parent.current.style.display = "none";
          dispatch(clearMessage());
        }
      }, 600);
    }
  };

  return (
    <div ref={parent} className={`alert ${status}`}>
      <span className={`closebtn ${status}-btn`} onClick={handleClose}>
        &times;
      </span>
      <strong className="alert-status-text">{status}!</strong> {message}{" "}
    </div>
  );
};
