import React, { useState } from "react";
import InventoryListItem from "../components/InventoryListItem";
import SwagLabsFooter from "../components/Footer";
import HeaderContainer from "../components/HeaderContainer";
import { sortAsc, sortDesc, sortHiLo, sortLoHi } from "../utils/Sorting";
import Select from "../components/Select";
import "./Inventory.css";

function Inventory({data = [] }){
  const InventoryData = data;
  let hint;

  
if(data.length===6){
hint="short"
}else if (data.length===13){
hint="long"
}

  const [inventoryList, setInventoryList] = useState(
    sortAsc(InventoryData, "name")
  );
  const [activeOption, setActiveOption] = useState("az");

  function sortByOption(event)  {
    
    setActiveOption(event.target.value);

    switch (event.target.value) {
      case "az":
        setInventoryList(sortAsc(InventoryData, "name"));
        break;
      case "za":
        setInventoryList(sortDesc(InventoryData, "name"));
        break;
      case "hilo":
        setInventoryList(sortHiLo(InventoryData, "price"));
        break;
      case "lohi":
        setInventoryList(sortLoHi(InventoryData, "price"));
        break;
      default:
        return;
    }
  };

  return (
    <div id="page_wrapper" className="page_wrapper">
      <div id="contents_wrapper">
        <HeaderContainer
          secondaryTitle="Characters!!"
          secondaryRightComponent={
            <Select
              activeOption={activeOption}
              options={[
                { k: "az", v: "Name (A to Z)" },
                { k: "za", v: "Name (Z to A)" },
                { k: "lohi", v: "Price (low to high)" },
                { k: "hilo", v: "Price (high to low)" },
              ]}
              onChange={sortByOption}
              testId="product-sort-container"
            />
          }
        />
        <div id="inventory_container">
          <div>
            <div
              id="inventory_container"
              className="inventory_container"
              data-test="inventory-container"
            >
              <div className="inventory_list" data-test="inventory-list">
                {inventoryList.map((item, i) => {
                  return (
                    <InventoryListItem
                      key={item.id}
                      id={item.id}
                      image_url={
                         item.image_url
                      }
                      name={item.name}
                      desc={item.desc}
                      price={item.price}
                      isTextAlignRight={false}
                      hint={hint}
            
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwagLabsFooter />
    </div>
  );
};

export default Inventory;
