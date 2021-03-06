import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterCustomer from "../Register/customer";
import RegisterStaff from "../Register/staff";
import ReservationController from "../makeReservation/ReservationController";
import MenuTabController from "../edit-Menu/MenuTabController";
import { BrowserRouter as Router } from "react-router-dom";
import Alert from "../layout/Alert";
import Login from "../login/login";
import LandingPage from "../landingPage/landing";
import CustomerReservationsController from "../customerReservations/CustomerReservationsController";
import StaffReservationsController from "../viewReservationsStaff/StaffReservationsController";
import StaffRecordsDataGridController from "../staff-records/StaffRecordsDataGridController";
import Dashboard from "../dashboard/dashboard";
import EditPromoController from '../editPromotions/EditPromoController'
import Locations from '../filler/locations';
import ViewMenu from "../viewMenu/ViewMenu";
import MealOrderController from "../createMealOrder/MealOrderController";
import PromoPage from "../promotions/promoPage"
import EditMenuController from "../edit-Menu/EditMenuController"
import StaffDashboard from "../dashboard/staffDashboard";
import AboutUs from "../filler/about";

const Routes = (props) => {
  return (
    <section className="container">
      <Alert />
      <Router>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={RegisterCustomer} />
        <Route exact path="/staff-register" component={RegisterStaff} />
        <Route
          exact
          path="/makeReservation"
          component={ReservationController}
        />
        <Route exact path="/edit-menu" component={MenuTabController} />
        <Route
          exact
          path="/my-reservations"
          component={CustomerReservationsController}
        />
        <Route
          exact
          path="/staff-reservations"
          component={StaffReservationsController}
        />
        <Route
          exact
          path="/staff-records"
          component={StaffRecordsDataGridController}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/staff-dashboard" component={StaffDashboard} />
        <Route exact path="/menu" component={ViewMenu} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/promotions" component={PromoPage} />
        <Route exact path="/edit-promotions" component={EditPromoController} />
        
        <Route exact path="/create-meal-order" component={MealOrderController} />
        <Route exact path="/about-us" component={AboutUs} />
      </Router>
    </section>
  );
};

export default Routes;
