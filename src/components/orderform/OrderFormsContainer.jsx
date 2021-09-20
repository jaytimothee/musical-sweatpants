import React from "react";
import "../../css/OrderFormsContainer.css";
import BreadCrumb from "./BreadCrumb"
import routes from "./orderFormRouteConfig"
import { Route, Switch } from "react-router-dom";

const OrderFormsContainer = () => {
  return (
    <div className="forms-container">
      <Switch>
        {routes.map(({ path, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={props => {
              return (
                <div className="forms-wrapper">
                  <BreadCrumb {...props} routes={routes} />
                  <Component {...props} />
                </div>
              );
            }}
          />
        ))}
      </Switch>
    </div>
  );
};

export default OrderFormsContainer;
