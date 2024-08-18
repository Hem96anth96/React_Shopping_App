import React from "react";
import "./HeaderContainer.css";
import DrawerMenu from "./DrawerMenu";
import CartButton from "./CartButton";


const HeaderContainer = ({
  customClass,
  secondaryRightComponent,
  secondaryTitle,
}) => {
  
  const RightComponent = ({ rightComponent }) => (
    <div className="right_component">{React.cloneElement(rightComponent)}</div>
  );
  
  const Title = ({ title }) => (
    <span className="title">
      {title}
    </span>
  );
  const extraClass = customClass ? ` ${customClass}` : "";
  const shoppingCartContainerClass = `shopping_cart_container`;

  return (
    <div
      id="header_container"
      className={`header_container${extraClass}`}
      data-test="header-container"
    >
      <div className="primary_header">
        <div id="menu_button_container">
          <DrawerMenu />
        </div>
        <div className="header_label">
          <div className="app_logo">Take Home your fav family guy</div>
        </div>
        <div
          id="shopping_cart_container"
          className={shoppingCartContainerClass}
        >
          <CartButton />
        </div>
      </div>
      <div className="header_secondary_container">
        {secondaryTitle && <Title title={secondaryTitle} />}
        {secondaryRightComponent && (
          <RightComponent rightComponent={secondaryRightComponent} />
        )}
      </div>
    </div>
  );
};


export default HeaderContainer;
