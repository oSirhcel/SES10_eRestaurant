import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterCustomer from "../Register/customer";
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "../layout/Alert";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Router>
        <Route exact path="/register" component={RegisterCustomer} />
      </Router>
    </section>
  );
};

export default Routes;
