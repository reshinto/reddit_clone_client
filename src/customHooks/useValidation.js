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
      if (url !== "") {
        if (!url.includes("http")) {
          urlError = "URL must start with http protocol";
          hasNoError = false;
        } else if (!url.includes("://")) {
          urlError = "URL must contain :// after http or https";
          hasNoError = false;
        } else if (!url.includes("://www.")) {
          urlError = "URL must have www. after ://";
          hasNoError = false;
        }
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
