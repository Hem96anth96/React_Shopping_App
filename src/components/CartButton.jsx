import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
// import { withRouter } from "react-router-dom"; older version v5 usage.
import { ShoppingCart } from "../utils/shopping-cart";
import { ROUTES } from "../utils/Constants";
import "./CartButton.css";

const CartButton = () => {
  //const { history } = props;

  const navigate = useNavigate();
  
  let cartBadge = "";
  const [cartContents, setCartContent] = useState(
    ShoppingCart.getCartContents()
  );

  const cartListener = useMemo(() => ({
    forceUpdate: () => setCartContent(ShoppingCart.getCartContents()),
  }), []);
  
  useEffect(() => {
    ShoppingCart.registerCartListener(cartListener);
  }, [cartListener]);

  if (cartContents.length > 0) {
    cartBadge = (
      <span className="shopping_cart_badge" data-test="shopping-cart-badge">
        {cartContents.length}
      </span>
    );
  }

  return (
    <a
      href={ROUTES.CART}
      className="shopping_cart_link"
  // onClick={() => history.push(ROUTES.CART)}
      onClick={() => navigate(ROUTES.CART)}
      data-test="shopping-cart-link"
    >
      {cartBadge}
    </a>
  );
};

export default CartButton;
