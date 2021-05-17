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
import StaffRecordsDataGridController from "../staff-records/StaffRecordsDataGridController";
import Dashboard from "../dashboard/dashboard";
import StaffDashboard from "../dashboard/staffDashboard";
<<<<<<< Updated upstream
import ViewMenu from "../viewMenu/ViewMenu";
import MealOrderController from "../createMealOrder/MealOrderController";
=======
import ViewMenu from '../viewMenu/ViewMenu';
import CreateMealOrder from '../createMealOrder/createMealOrder';
import PromoPage from '../promotions/promoPage';
import EditMenuController from '../edit-Menu/EditMenuController'
import EditPromotionController from '../editPromotions/EditPromotionController'
>>>>>>> Stashed changes

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
          path="/staff-records"
          component={StaffRecordsDataGridController}
        />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/staff-dashboard" component={StaffDashboard} />
        <Route exact path="/menu" component={ViewMenu} />
<<<<<<< Updated upstream
        <Route exact path="/create-meal-order" component={MealOrderController} />
=======
        <Route exact path="/createMealOrder" component={CreateMealOrder} />
        <Route exact path="/promotions" component={PromoPage} />
        <Route exact path="/editMenu" component={EditMenuController} />
        <Route exact path="/edit-promotion" component={EditPromotionController} />

>>>>>>> Stashed changes
      </Router>
    </section>
  );
};

export default Routes;
