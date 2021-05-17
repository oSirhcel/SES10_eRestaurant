import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import StaffReservationsDataGrid from './StaffReservationsDataGrid';
import ReservationDetailsController from './ReservationDetailsController';


/*Shows the user's reservation in the datagrid in first step and 
then details of the selected reservaiton in the second step.*/

export class ViewReservationStepper extends Component {

  render() {
    const { step, columns, rows, reservationData } = this.props;
    const { prevStep, } = this.props;
    const { handleRowSelected, handleDelete } = this.props;
    

    switch (step) {
      case 1:
        return (
            <div>
              <StaffReservationsDataGrid
                handleRowSelected={handleRowSelected}
                handleDelete={handleDelete}
                columns={columns}
                rows={rows}
              />
            </div>
          
        );
      case 2:
        return (
            <div>
              <ReservationDetailsController
                reservationData = {reservationData}
              />
              <Button onClick={prevStep}>Back</Button>
            </div>
          
        )
    }
  }
}

export default ViewReservationStepper;