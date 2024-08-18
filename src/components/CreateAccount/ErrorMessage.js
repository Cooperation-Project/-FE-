import React from "react";

const ErrorMessage = ({ hasError, errorMessage }) => {
  return (
    hasError && (
      <div className="text-red w-w7 h-h3 py-2.5 text-xs">{errorMessage}</div>
    )
  );
};

export default ErrorMessage;
