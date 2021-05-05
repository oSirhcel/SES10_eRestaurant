import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "../layout/Alert";
import RegisterCustomer from "../Register/customer";
import RegisterStaff from "../Register/staff";
import LandingPage from "../landingPage/landing";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route path="/registerCustomer" component={RegisterCustomer} />
        <Route path="/registerStaff" component={RegisterStaff} />
      </Router>
    </section>
  );
};

export default Routes;
