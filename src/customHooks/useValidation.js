import { useState, useEffect } from "react";

export default ({ title, url }) => {
  const initialState = {
    titleError: "",
    urlErrpr: "",
    isValid: false,
  };
  const [error, setError] = useState(initialState);

  useEffect(() => {
    const validation = () => {
      let titleError = "";
      let urlError = "";
      let hasNoError = true;
      if (title === "") {
        titleError = "Title must not be empty";
        hasNoError = false;
      }
      if (url === "") {
        urlError = "URL must not be empty";
        hasNoError = false;
      }
      setError({
        titleError,
        urlError,
        isValid: hasNoError ? true : false,
      });
      return hasNoError;
    };
    validation();
  }, [title, url]);

  return { error, setError, initialState };
};
