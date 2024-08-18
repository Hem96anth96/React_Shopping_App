import React from "react";

import "./Button.css";
import backPng from "../assets/img/back-arrow.png";

export const BUTTON_TYPES = {
  ACTION: "action",
  BACK: "secondary back",
  PRIMARY: "primary",
  SECONDARY: "secondary",
};
export const BUTTON_SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
const Button = ({
  customClass,
  label,
  onClick,
  size,
  testId,
  type,
  ...props
}) => {
  const buttonTypeClass = ` btn_${type}`;
  const extraClass = customClass ? ` ${customClass}` : "";
  const buttonSize = ` btn_${size}`;
  /* istanbul ignore next */
  const BackImage = () => (
    <img src={backPng} className="back-image" alt="Go back" />
  );

  return (
    <button
      className={`btn${buttonTypeClass}${buttonSize}${extraClass}`}
      onClick={onClick}
      {...props}
      id={props.id}
    >
      {type === BUTTON_TYPES.BACK && <BackImage />}
      {label}
    </button>
  );
};




export default Button;
