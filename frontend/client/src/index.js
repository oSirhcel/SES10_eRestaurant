import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import StaffRecordsStage from './actions/StaffRecordsDataGridController';
import CustomerReservationsStage from './actions/CustomerReservationsController';
import ViewReservationStepper from './components/customerReservations/ViewReservationStepper';


ReactDOM.render(<CustomerReservationsStage />, document.getElementById('root'));

