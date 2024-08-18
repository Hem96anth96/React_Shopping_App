import React from "react";
import { useNavigate } from "react-router-dom";

import { slide as Menu } from "react-burger-menu";
import { ShoppingCart } from "../utils/shopping-cart";
import { ROUTES } from "../utils/Constants";
import {
  removeCredentials,
} from "../utils/Credentials";
import menuClosePng from "../assets/img/close.png";
import menuCloseSvg from "../assets/svg/close@3x.svg";
import menuIconPng from "../assets/img/menu.png";
import menuIconSvg from "../assets/svg/menu3x.svg";
import "./DrawerMenu.css";

function DrawerMenu() {
 
  const navigate = useNavigate();
  function resetStorage(){
    // Wipe out our shopping cart now
    ShoppingCart.resetCart();
  };



  return (
    
    <Menu
      
      customBurgerIcon={
        <img
          src={menuIconPng}
          
          srcSet={menuIconSvg}
          alt="Open Menu"
          data-test="open-menu"
        />
      }
      customCrossIcon={
        <img
          src={menuClosePng}

          srcSet={menuCloseSvg}
          alt="Close Menu"
          data-test="close-menu"
        />
      }

      outerContainerId="page_wrapper"
      pageWrapId="contents_wrapper"
      noOverlay
     
    >
      <a
        id="inventory_sidebar_link"
        className="menu-item"
        href={ROUTES.INVENTORY}
        onClick={(evt) => {
          evt.preventDefault();
          navigate(ROUTES.INVENTORY);
        }}
        data-test="inventory-sidebar-link"
      >
        All Items
      </a>
      <a
        id="about_sidebar_link"
        className="menu-item"
        href="https://www.linkedin.com/in/saihemanth-chowdary-thammineni-44b24a2b6/"
        data-test="about-sidebar-link"
      >
        About
      </a>
      <a
        id="logout_sidebar_link"
        className="menu-item"
        href={ROUTES.LOGIN}
        onClick={(evt) => {
          evt.preventDefault();
          removeCredentials();
          navigate(ROUTES.LOGIN);
        }}
        data-test="logout-sidebar-link"
      >
        Logout
      </a>
      <a
        id="reset_sidebar_link"
        className="menu-item"
        href={window.location.href}
        onClick={(evt) => {
          evt.preventDefault();
          resetStorage();

          window.location.reload();
          

        // need to refresh page to reflect the change in button's label 
        // or storage items in respective pages.
       
          
        }}
        data-test="reset-sidebar-link"
      >
        Reset App State
      </a>
    </Menu>
    
  );
};


export default DrawerMenu;
