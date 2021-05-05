import React from "react";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "../layout/Alert";
import Login from "../login/login";
import RegisterCustomer from "../Register/customer";
import RegisterStaff from "../Register/staff";
import LandingPage from "../landingPage/landing";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterCustomer} />
        <Route exact path="/registerStaff" component={RegisterStaff} />  
      </Router>
    </section>
  );
};

export default Routes;
 