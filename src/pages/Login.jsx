import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import {
  setCredentials,
  verifyCredentials,
} from "../utils/Credentials";
import { ROUTES, VALID_USERNAMES, VALID_PASSWORD } from "../utils/Constants";
import InputError from "../components/InputError";
import SubmitButton from "../components/SubmitButton";
import ErrorMessage from "../components/ErrorMessage";


function Login() {
  
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
 

  const dismissError = () => {
    setError("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!username) {
      return setError("Username is required");
    }

    if (!password) {
      return setError("Password is required");
    }

    if (verifyCredentials(username, password)) {
      // If we're here, we have a username and password.
      // Store the username in our cookies.
      setCredentials(username, password);
      
     

      // Redirect!
      navigate(ROUTES.INVENTORY);
    } else {
      console.error("Someone tried to login with invalid credentials.", { username });
      return setError(
        "Username and password do not match"
      );
    }
  };

  const handleUserChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handlePassChange = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <div className="login_container" autoComplete="on">
      <div className="login_logo">Family Guy Shop</div>

      <div className="login_wrapper" data-test="login-container">
        <div className="login_wrapper-inner">
          <div id="login_button_container" className="form_column">
            <div className="login-box">
              <form onSubmit={handleSubmit}>
                <InputError
                  isError={Boolean(error)}
                  type="text"
                  value={username}
                  onChange={handleUserChange}
               
                  placeholder="Username"
                  // Custom
                  id="user-name"
                  name="username"
                  autoCorrect="off"
                  autoCapitalize="none"
                  autoComplete="username"
                />
                <InputError
                  isError={Boolean(error)}
                  type="password"
                  value={password}
                  id="password"
                  onChange={handlePassChange}
                  testId="password"
                  placeholder="Password"
                  // Custom
                  name="password"
                  autoCorrect="off"
                  autoCapitalize="none"
                  autoComplete="current-password"
                />
                <ErrorMessage
                  isError={Boolean(error)}
                  errorMessage={`Epic sadface: ${error}`}
                  onClick={dismissError}
                  backgroundColor ="white"
                  
                />
                <SubmitButton
                  // `btn_action` has no style function
                  // but is there for backwards compatibility
                  customClass="btn_action"
                  testId="login-button"
                  value="Login"
                />
              </form>
            </div>
          </div>
        </div>
        <div
          className="login_credentials_wrap"
          data-test="login-credentials-container"
        >
          <div className="login_credentials_wrap-inner">
            <div
              id="login_credentials"
              className="login_credentials"
              data-test="login-credentials"
            >
              <h4>Username:</h4>
              {VALID_USERNAMES.map((u, i) => (
                <Fragment key={i}>
                  {u}
                  <br />
                </Fragment>
              ))}
            </div>
            <div className="login_password" data-test="login-password">
              <h4>Password:</h4>
              {VALID_PASSWORD}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
