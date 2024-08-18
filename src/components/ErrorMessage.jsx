import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./ErrorMessage.css";

const ErrorMessage = ({ isError,backgroundColor, errorMessage, onClick, ...props }) => {
  return (
    <div
      className="error-message-container"
      style={{ backgroundColor: isError ?  "#e2231a" : backgroundColor}} // Change colors as needed
      {...props}
    >
      {isError && (
        // This component is not structured how it should,
        // But this is done to keep backwards compatibility
        <h3 data-test="error">
          <button
            className="error-button"
            onClick={onClick}
            data-test="error-button"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {errorMessage}
        </h3>
      )}
    </div>
  );
};

export default ErrorMessage;
