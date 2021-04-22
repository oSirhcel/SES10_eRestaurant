import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CustomerReservationsDataGrid from './CustomerReservationsDataGrid';
import ReservationDetailsController from '../../actions/ReservationDetailsController';

export class ViewReservationStepper extends Component {

  render() {
    const { step, columns, rows, reservationData } = this.props;
    const { prevStep,  } = this.props;
    const { handleRowSelected, handleCellClicked, handleDelete, handleEdit, handleValueChange } = this.props;
    

    switch (step) {
      case 1:
        return (
            <div>
                <CustomerReservationsDataGrid
                  handleRowSelected={handleRowSelected}
                  handleCellClicked={handleCellClicked}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit}
                  handleValueChange={this.handleValueChange}
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