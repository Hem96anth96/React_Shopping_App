import React from "react";
import "./InputError.css";


function InputError (props) {

  const getAutoCompleteValue = () => {
    if (props.type === "password") {
      return "current-password";
    } else if (props.type === "text" && props.placeholder.toLowerCase().includes("username")) {
      return "username";
    }
    return "off"; // Fallback or disable autocomplete for other types
  };

  return (
    <div className="form_group">
      <input
        // `form_input` has no style function
        // but is there for backwards compatibility
        className={`input_error form_input${props.isError ? " error" : ""}`}
        placeholder={props.placeholder}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        autoComplete={getAutoCompleteValue()}
        id={props.id}

      />
    
    </div>
  );
};


export default InputError;
