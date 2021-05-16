import React from 'react';
import CustomerViewFrame from '../viewFrames/CustomerViewFrame';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import ViewReservationStepper from './ViewReservationStepper';
import Container from "@material-ui/core/Container";
import Header from "../margins/loggedHeader";

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
      {id: 1, date: new Date(2020, 5, 19, 12, 45), numPeople: 2, mealOrder: 'No'},
      {id: 2, date: new Date(2021, 5, 21, 18, 30), numPeople: 5, mealOrder: 'Yes'},
      {id: 3, date: new Date(2021, 5, 26, 11, 30), numPeople: 13, mealOrder: 'Yes'},
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
        <Container maxWidth="lg">
          <Header />
        </Container>

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

/*const CustomerReservationsStage = () => {
  return (
    <CustomerViewFrame element = {<CustomerReservationsController />}/>
  )
}*/

export default CustomerReservationsController;