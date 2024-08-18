import React, { useEffect, useState} from "react";
import { useLocation} from "react-router-dom";
import { ShoppingCart } from "../utils/shopping-cart";
import { InventoryData } from "../utils/InventoryData";
import {InventoryDataLong} from "../utils/InventoryDataLong"
import HeaderContainer from "../components/HeaderContainer";
import Button, { BUTTON_SIZES, BUTTON_TYPES } from "../components/Button";
import SwagLabsFooter from "../components/Footer";
import "./InventoryItem.css";



const InventoryItem = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const location = useLocation();

  

  // Get our queryparams now
  const queryParams = new URLSearchParams(window.location.search);
  let inventoryId = -1;
  let item;

  /* istanbul ignore else */
  if (queryParams.has("id")) {
    inventoryId = parseInt(queryParams.get("id"));
  }
 
  if(location.state?.hint==="long"){
    if (inventoryId >= 0 && InventoryDataLong.length > inventoryId) {
      item = InventoryDataLong[inventoryId];
  }  else {
    item = {
      name: "ITEM NOT FOUND",
      desc: `No Description Found`,
      image_url: "sl-404.jpg",
      price: "UnKnown",
    };
  }
} else{

  if (inventoryId >= 0 && InventoryData.length > inventoryId) {
    item = InventoryData[inventoryId];
  } else {
    item = {
      name: "ITEM NOT FOUND",
      desc: `No Description Found`,
      image_url: "sl-404.jpg",
      price: "UnKnown",
    };
  }
}
  
  
  // item.id = inventoryId; not needed they are of sam value anyways

const [imageSrc, setImageSrc] = useState(null);

useEffect(() => {
  const loadImage = async () => {
    const image = await import(`../assets/img/${item.image_url}`);
    setImageSrc(image.default);
  };

  loadImage();
}, [item.image_url]);



  const [itemInCart, setItemInCart] = useState(
    ShoppingCart.isItemInCart(inventoryId)
  );

 
  const addToCart = (itemId) => {
    
    ShoppingCart.addItem(itemId);
    setItemInCart(true);
  };
 
  const removeFromCart = (itemId) => {


    ShoppingCart.removeItem(itemId);
    setItemInCart(false);
  };
 
  const ButtonType = ({ id, item, itemInCart }) => {
    const label = itemInCart ? "Remove" : "Add to cart";
    const onClick = itemInCart ? () => removeFromCart(id) : () => addToCart(id);
    const type = itemInCart ? BUTTON_TYPES.SECONDARY : BUTTON_TYPES.PRIMARY;
    const testId = label === "Remove" ? "remove" : "add-to-cart";

    return (
      <Button
        customClass="btn_inventory"
        label={label}
        onClick={onClick}
        size={BUTTON_SIZES.SMALL}
        testId={testId}
        type={type}
      />
    );
  };

  return (
    <div id="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer
          customClass="inventory_details"
       
        />
        <div
          id="inventory_item_container"
          className="inventory_item_container"
          data-test="inventory-container"
        >
          <div className="inventory_details">
            <div
              className="inventory_details_container"
              data-test="inventory-item"
            >
              <div className="inventory_details_img_container">
                <img
                  alt={item.name}
                  className="inventory_details_img"
                  src={imageSrc}
      
                />
              </div>
              <div className="inventory_details_desc_container">
                <div
                  className="inventory_details_name large_size"
                  
                >
                  {item.name}
                </div>
                
                
                    <div
                      className="inventory_details_desc large_size"
                      
                    >
                      {item.desc}
                    </div>
                 
                <div
                  className="inventory_details_price"
                  
                >
                  ${item.price}
                </div>
                <ButtonType
                  id={item.id}
                  itemInCart={itemInCart}
                  item={item.name}
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

export default InventoryItem;
