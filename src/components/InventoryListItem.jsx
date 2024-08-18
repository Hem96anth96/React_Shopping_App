import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import { ShoppingCart } from "../utils/shopping-cart";

import "./InventoryListItem.css";
import { ROUTES } from "../utils/Constants";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "./Button";

const InventoryListItem = (props) => {
  const {
    isTextAlignRight,
    missAlignButton,
    desc,
    id,
    image_url,
    name,
    price,
    hint,
  } = props;



const [imageSrc, setImageSrc] = useState(null);

useEffect(() => {
  const loadImage = async () => {
    const image = await import(`../assets/img/${image_url}`);
    setImageSrc(image.default);
  };

  loadImage();
}, [image_url]);

  const [itemInCart, setItemInCart] = useState(ShoppingCart.isItemInCart(id));
  const navigate = useNavigate();
  const addToCart = (itemId) => {
    
    ShoppingCart.addItem(itemId);
    setItemInCart(true);
  };
 
  const removeFromCart = (itemId) => {
   
    ShoppingCart.removeItem(itemId);
    setItemInCart(false);
  };
  let linkId = id;
  const itemLink = `${ROUTES.INVENTORY_LIST}?id=${linkId}`;

  
  const ButtonType = ({ id, item, itemInCart, missAlignButton }) => {
    const label = itemInCart ? "Remove" : "Add to cart";
    const onClick = itemInCart ? () => removeFromCart(id) : () => addToCart(id);
    const type = itemInCart ? BUTTON_TYPES.SECONDARY : BUTTON_TYPES.PRIMARY;
  
    const buttonClass = `btn_inventory ${
      missAlignButton ? "btn_inventory_misaligned" : ""
    }`;
    return (
      <Button
        customClass={buttonClass}
        label={label}
        onClick={onClick}
        size={BUTTON_SIZES.SMALL}
        type={type}
      />
    );
  };
  const itemNameClass = `inventory_item_name ${
    isTextAlignRight ? "align_right" : ""
  }`;

  return (
    <div className="inventory_item" data-test="inventory-item">
      <div className="inventory_item_img">
        <a
          href={itemLink}
          id={`item_${id}_img_link`}
          onClick={(evt) => {
            evt.preventDefault();
            navigate(itemLink, {state: {hint: hint}});
          }}
          
        >
          <img
            alt={name}
            className="inventory_item_img"
            src={imageSrc}
           
          />
        </a>
      </div>
      <div
        className="inventory_item_description"
        data-test="inventory-item-description"
      >
        <div className="inventory_item_label">
          <a
            href={itemLink}
            id={`item_${id}_title_link`}
            onClick={(evt) => {
              evt.preventDefault();
             navigate(itemLink, {state: {hint: hint}});
            }}
            
          >
            <div className={itemNameClass} data-test="inventory-item-name">
              {name}
            </div>
          </a>
          <div className="inventory_item_desc" data-test="inventory-item-desc">
            {desc}
          </div>
        </div>
        <div className="pricebar">
          <div
            className="inventory_item_price"
            data-test="inventory-item-price"
          >
            ${price}
          </div>
          <ButtonType
            id={id}
            itemInCart={itemInCart}
            item={name}
            missAlignButton={missAlignButton}
          />
        </div>
      </div>
    </div>
  );
};



export default InventoryListItem;
