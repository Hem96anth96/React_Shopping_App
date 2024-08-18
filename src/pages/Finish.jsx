import React, {useEffect} from "react";
import {useNavigate, useLocation } from "react-router-dom";
import Checkmark from "../assets/img/checkmark.png";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import Button, { BUTTON_SIZES } from "../components/Button";
import { ROUTES } from "../utils/Constants";
import "./Finish.css";

const Finish = () => {

  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    if (!location.state) {
      // If state is not available, redirect to the checkout step one page
      navigate(ROUTES.CHECKOUT_STEP_ONE);
    }
  }, [location.state, navigate]);


 const userName = location.state?.userName ;

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Checkout: Complete!" />
        <div
          id="checkout_complete_container"
          className="checkout_complete_container"
          data-test="checkout-complete-container"
        >
          <img
            alt="Pony Express"
            className="pony_express"
            src={Checkmark}
            data-test="pony-express"
          />
          <h2 className="complete-header" data-test="complete-header">
            Hi {userName}, Thank you for your order!
          </h2>
          <div className="complete-text" data-test="complete-text">
            Your order has been dispatched, and will arrive ASAP!
          </div>
          <Button
            label="Back Home"
            onClick={() => navigate(ROUTES.INVENTORY)}
            size={BUTTON_SIZES.SMALL}
            testId="back-to-products"
            id="back-to-products"
          />
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};


export default Finish;
