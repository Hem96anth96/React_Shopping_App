import React from "react";
import { Navigate} from "react-router-dom";

import { isLoggedIn } from "../utils/Credentials";
import { ROUTES } from "../utils/Constants";

const PrivateRoute = ({  component: Component, ...rest }) => {
  return isLoggedIn() ? (
    <Component {...rest} />
  ) : (
    <Navigate
      to={ROUTES.LOGIN}
      state={{ from: rest.location }}
    />
  );
};

export default PrivateRoute;
