import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterCustomer from "../Register/customer";
import RegisterStaff from "../Register/staff";
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "../layout/Alert";
import SignIn from "../login/login";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Router>
        <Route exact path="/register" component={RegisterCustomer} />
        <Route exact path="/registerStaff" component={RegisterStaff} />
        <Route exact path="/login" component={SignIn} />
      </Router>
    </section>
  );
};

export default Routes;
 