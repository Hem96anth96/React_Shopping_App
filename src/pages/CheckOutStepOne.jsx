import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import { ROUTES } from "../utils/Constants";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import InputError from "../components/InputError";
import ErrorMessage from "../components/ErrorMessage";
import SubmitButton from "../components/SubmitButton";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";
import "./CheckOutStepOne.css";

const CheckOutStepOne = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const dismissError = () => {
    setError("");
  };
  const handleFirstNameChange = (evt) => {
    setFirstName(evt.target.value);
  };
  const handleLastNameChange = (evt) => {
    setLastName(evt.target.value);
  };
  const handlePostalCodeChange = (evt) => {
    setPostalCode(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (!firstName) {
      setError("First Name is required");
      return; 
    }

  
    if (!lastName) {
      setError("Last Name is required");  
      return;
    }

    if (!postalCode) {
       setError("Postal Code is required");
       return;
    }

 // If we're here, we have our required info. Redirect!
 navigate(ROUTES.CHECKOUT_STEP_TWO, { 
  state: { 
    userName: firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(), 
    postalCode: postalCode 
  } 
});

    return "";
  };

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Checkout: Your Information" />
        <div
          id="checkout_info_container"
          className="checkout_info_container"
          data-test="checkout-info-container"
        >
          <div className="checkout_info_wrapper">
            <form onSubmit={handleSubmit}>
              <div className="checkout_info">
                <InputError
                  isError={Boolean(error)}
                  type="text"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  testId="firstName"
                  placeholder="First Name"
                  // Custom
                  id="first-name"
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <InputError
                  isError={Boolean(error)}
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  testId="lastName"
                  placeholder="Last Name"
                  // Custom
                  id="last-name"
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <InputError
                  isError={Boolean(error)}
                  type="text"
                  value={postalCode}
                  onChange={handlePostalCodeChange}
                  testId="postalCode"
                  placeholder="Zip/Postal Code"
                  // Custom
                  id="postal-code"
                  autoCorrect="off"
                  autoCapitalize="none"
                />
                <ErrorMessage
                  isError={Boolean(error)}
                  errorMessage={`Error: ${error}`}
                  onClick={dismissError}
                  backgroundColor = "#A2CA71"
                />
              </div>
              <div className="checkout_buttons">
                <Button
                  // `cart_cancel_link` has no style function
                  // but is there for backwards compatibility
                  customClass="cart_cancel_link"
                  label="Cancel"
                  onClick={(evt) => {
                    evt.preventDefault();
                    navigate(ROUTES.CART);
                  }}
                  size={BUTTON_SIZES.MEDIUM}
                  testId="cancel"
                  type={BUTTON_TYPES.BACK}
                />
                <SubmitButton
                  customClass="btn btn_primary cart_button btn_action"
                  testId="continue"
                  value="Continue"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};


export default CheckOutStepOne;
