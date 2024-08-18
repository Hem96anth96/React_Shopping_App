import React from "react";

import "./SubmitButton.css";

const SubmitButton = ({ customClass, testId, value, ...props }) => {
  const extraClass = customClass ? ` ${customClass}` : "";
  return (
    <input
      type="submit"
      className={`submit-button${extraClass}`}
      value={value}
      {...(testId
        ? {
            "data-test": testId,
            id: testId,
            name: testId,
          }
        : {})}
      {...props}
    />
  );
};


export default SubmitButton;
