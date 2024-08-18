import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/Constants";
import { ShoppingCart } from "../utils/shopping-cart";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "./Button";
import "./CartItem.css";

const CartItem = ({ item, showButton }) => {
  const [itemVisible, setItemVisible] = useState(true);
  const navigate = useNavigate();

  if (!item) {
    // Hide this if the item is invalid
    setItemVisible(false);
  }

  const removeFromCart = (itemId) => {
    ShoppingCart.removeItem(itemId);
    setItemVisible(false);
  };

  if (itemVisible) {
    const { id, name, desc, price } = item;
    let linkId = id;

    const itemLink = `${ROUTES.INVENTORY_LIST}?id=${linkId}`;

    return (
      <div className="cart_item" data-test="inventory-item">
        <div className="cart_quantity" data-test="item-quantity">
          1
        </div>
        <div className="cart_item_label">
          <a
            href={itemLink}
            id={`item_${id}_title_link`}
            onClick={(evt) => {
              evt.preventDefault();
              //history.push(itemLink);
              navigate(itemLink);
            }}
            data-test={`item-${id}-title-link`}
          >
            <div
              className="inventory_item_name"
              data-test="inventory-item-name"
            >
              {name}
            </div>
          </a>
          <div className="inventory_item_desc" data-test="inventory-item-desc">
            {desc}
          </div>
          <div className="item_pricebar">
            <div
              className="inventory_item_price"
              data-test="inventory-item-price"
            >
              ${price}
            </div>
            {showButton && (
              <Button
                customClass="cart_button"
                label="Remove"
                testId={`remove-${name.replace(/\s+/g, "-").toLowerCase()}`}
                onClick={() => removeFromCart(id)}
                size={BUTTON_SIZES.SMALL}
                type={BUTTON_TYPES.SECONDARY}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return <div className="removed_cart_item" />;
};


export default CartItem;
