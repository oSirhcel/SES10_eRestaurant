import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterCustomer from "../Register/customer";
import RegisterStaff from "../Register/staff";
import ReservationController from '../makeReservation/ReservationController';
import MenuTabController from '../edit-Menu/MenuTabController';
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "../layout/Alert";
import Login from "../login/login";
import RegisterCustomer from "../Register/customer";
import RegisterStaff from "../Register/staff";
import LandingPage from "../landingPage/landing";
import CustomerReservationsController from '../customerReservations/CustomerReservationsController';
import StaffRecordsDataGridController from '../staff-records/StaffRecordsDataGridController';

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterCustomer} />
        <Route exact path="/registerStaff" component={RegisterStaff} />
        <Route exact path="/makeReservation" component={ReservationController}/>
        <Route exact path="/staffMenuView" component={MenuTabController} />
        <Route exact path="/customerReservations" component={CustomerReservationsController} />
        <Route exact path="/staffRecords" component={StaffRecordsDataGridController} />
      </Router>
    </section>
  );
};

export default Routes;
 