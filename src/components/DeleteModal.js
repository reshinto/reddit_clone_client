import React, { useRef } from "react";
import "./DeleteModal.css";

export default ({ type, handleDelete }) => {
  const modal = useRef();
  return (
    <>
      <div
        ref={modal}
        onClick={() => (modal.current.style.display = "none")}
        id="id01"
        className="modal"
      >
        <span
          onClick={() => (modal.current.style.display = "none")}
          className="close"
          title="Close Modal"
        >
          &times;
        </span>
        <form className="modal-content">
          <div className="modal-container">
            <h1>Delete {type}</h1>
            <p>Are you sure you want to delete your {type}?</p>

            <div className="clearfix">
              <button type="button" className="delete-modal-btn cancelbtn">
                Cancel
              </button>
              <button
                type="button"
                className="delete-modal-btn deletebtn"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
