import React from "react";
import "./Select.css";

const Select = ({ activeOption, onChange, options}) => {
  return (
    <span className="select_container">
      <span className="active_option" data-test="active-option">
        {
          options[options.findIndex((option) => option.k === activeOption)]
            .v
        }
      </span>
      <select
        onChange={onChange}
        className="product_sort_container"
        value={activeOption}
      >
        {options.map(({ k, v}) => (
          <option value={k} key={k}>
            {v}
          </option>
        ))}
      </select>
    </span>
  );
};




export default Select;
