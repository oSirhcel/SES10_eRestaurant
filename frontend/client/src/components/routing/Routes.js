import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterCustomer from "../Register/customer";
import RegisterStaff from "../Register/staff";
import MenuTabController from '../edit-Menu/MenuTabController';
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "../layout/Alert";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Router>
        <Route exact path="/register" component={RegisterCustomer} />
        <Route exact path="/registerStaff" component={RegisterStaff} />
        <Route exact path="/staffMenuView" component={MenuTabController} />
      </Router>
    </section>
  );
};

export default Routes;
