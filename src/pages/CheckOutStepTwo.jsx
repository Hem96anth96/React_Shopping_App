import React, { useEffect } from "react";
import { useNavigate, useLocation} from "react-router-dom";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import CartItem from "../components/CartItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";
import "./CheckOutStepTwo.css";

const CheckOutStepTwo = () => {

  const navigate = useNavigate();
  const location = useLocation();


   useEffect(() => {
    if (!location.state) {
      // If state is not available, redirect to the checkout step one page
     navigate(ROUTES.CHECKOUT_STEP_ONE);
    }
  }, [location.state, navigate]);


  const userName = location.state?.userName || '';
  const postalCode = location.state?.postalCode || '';

  const clearCart = () => {
   
   // Wipe out our shopping cart
    ShoppingCart.resetCart();
  };
  const contents = ShoppingCart.getCartContents();
  let orderTotal = 0;

  for (const curItem in contents) {
    orderTotal = orderTotal + InventoryData[contents[curItem]].price;
    
  }

  const orderTax = (orderTotal * 0.08).toFixed(2);

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer secondaryTitle="Checkout: Overview" />
        <div
          id="checkout_summary_container"
          className="checkout_summary_container"
          data-test="checkout-summary-container"
        >
          <div>
            <div className="cart_list" data-test="cart-list">
              <div
                className="cart_quantity_label"
                data-test="cart-quantity-label"
              >
                QTY
              </div>
              <div className="cart_desc_label" data-test="cart-desc-label">
                Description
              </div>
              {contents.map((item, i) => {
                return <CartItem key={i} item={InventoryData[item]} />;
              })}
            </div>
            <div className="summary_info">
              <div
                className="summary_info_label"
                data-test="payment-info-label"
              >
                Payment Information:
              </div>
              <div
                className="summary_value_label"
                data-test="payment-info-value"
              >
                SauceCard #31337
              </div>
              <div
                className="summary_info_label"
                data-test="shipping-info-label"
              >
                Shipping Information: {postalCode}
              </div>
              <div
                className="summary_value_label"
                data-test="shipping-info-value"
              >
                Free Express Delivery to you {userName} !
              </div>
              <div className="summary_info_label" data-test="total-info-label">
                Price Total
              </div>
              <div
                className="summary_subtotal_label"
                data-test="subtotal-label"
              >
                Item total: ${orderTotal}
              </div>
              <div className="summary_tax_label" data-test="tax-label">
                Tax: ${orderTax}
              </div>
              <div className="summary_total_label" data-test="total-label">
                Total: ${(orderTotal + parseFloat(orderTax)).toFixed(2)}
              </div>
              <div className="cart_footer">
                <Button
                  // `cart_cancel_link` has no style function
                  // but is there for backwards compatibility
                  customClass="cart_cancel_link"
                  label="Cancel"
                  onClick={(evt) => {
                    evt.preventDefault();
                    navigate(ROUTES.INVENTORY);
                  }}
                  size={BUTTON_SIZES.MEDIUM}
                  testId="cancel"
                  type={BUTTON_TYPES.BACK}
                />
                <Button
                  customClass="cart_button"
                  label="Finish"
                  onClick={(evt) => {
                    evt.preventDefault();
                    clearCart();
                   navigate(ROUTES.CHECKOUT_COMPLETE,{ state: {userName:userName} });
                  }}
                  size={BUTTON_SIZES.MEDIUM}
                  testId="finish"
                  id="finish"
                  type={BUTTON_TYPES.ACTION}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default CheckOutStepTwo;
