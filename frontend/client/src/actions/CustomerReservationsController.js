import React from 'react';
import CustomerReservationsDataGrid from '../components/customerReservations/CustomerReservationsDataGrid';
import CustomerViewFrame from '../components/viewFrames/CustomerViewFrame';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import ViewReservationStepper from '../components/customerReservations/ViewReservationStepper';


// The time is derived from the date. The details button is a separate column
const columns = (nextStep) => {
    return (
    [
      { field: 'id', headerName: 'Reservation ID', type: 'number', width: 200},
      { 
        field: 'date', 
        headerName: 'Date', 
        type: 'date',
        width: 130, 
        renderCell: (params) => (       
          `${format(params.value, 'd MMM yyyy')}`           
        ),  
      },
        
      { 
        field: 'time', 
        headerName: 'Time', 
        width: 130,
        valueGetter: (params) => (
            `${format(params.getValue('date'), 'h:mm a')}`  
        )
            
      },
      { field: 'numPeople', headerName: 'Number of People', type: 'number', width: 200},
      { field: 'mealOrder', headerName: 'Meal Order', width: 130},
      { 
        field: 'detailsBtn', 
        headerName: ' ',
        width: 130,
        renderCell: () => (
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginLeft: 16 }}
            onClick={nextStep}
          >
            Details
          </Button>
        )
      },
    ]
  );
} 
  
//Dummy Data
  const rows = [
      {id: 101, date: new Date(2020, 4, 19, 11, 15), numPeople: 12, mealOrder: 'No'},
      {id: 102, date: new Date(2021, 4, 20, 11, 30), numPeople: 2, mealOrder: 'Yes'},
      {id: 103, date: new Date(2021, 6, 20, 12, 30), numPeople: 4, mealOrder: 'Yes'},
      {id: 104, date: new Date(2021, 7, 22, 18, 15), numPeople: 6, mealOrder: 'Yes'},
      {id: 105, date: new Date(1999, 7, 22, 11, 0), numPeople: 15, mealOrder: 'No'},
    ];
  

// In order to edit reservations have to view the details first.
class CustomerReservationsController extends React.Component {
  state = {
    step: 1,
    columns: columns(),
    rows: rows,
    selectedRow:'',
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleRowSelected = (row) => {
    this.setState({selectedRow : row});
  }

  handleDelete = () => {
    this.setState(state => ({
      rows : state.rows.filter((row, j) => row.id != this.state.selectedRow.data.id)
    }));
  }

  render() {
    return(
      <div
        onKeyDownCapture={(e) => {
          if (e.key === "Backspace" || e.key === "Delete") {
            e.stopPropagation();
          }
        }}
      >

        <ViewReservationStepper
          step = {this.state.step}
          prevStep = {this.prevStep}
          reservationData = {this.state.selectedRow}
          handleRowSelected={this.handleRowSelected}
          handleDelete={this.handleDelete}
          columns={columns(this.nextStep)}
          rows={this.state.rows}
        />

      </div>
            
    )
  }
}

const CustomerReservationsStage = () => {
  return (
    <CustomerViewFrame element = {<CustomerReservationsController />}/>
  )
}

export default CustomerReservationsStage;