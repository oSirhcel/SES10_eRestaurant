import React from 'react';
import CustomerViewFrame from '../viewFrames/CustomerViewFrame';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import ViewReservationStepper from './ViewReservationStepper';
import Container from "@material-ui/core/Container";
import Header from "../margins/staffHeader";

// The time is derived from the date. The details button is a separate column
const columns = (nextStep) => {
    return (
    [
      { field: 'id', headerName: 'Reservation ID', type: 'number', width: 200},
      { field: 'customer', headerName: 'Customer', type: 'string', width: 150},
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
      { 
        field: 'mealOrder', 
        headerName: 'Meal Order', 
        width: 130,
        renderCell: (params) => (       
          params.value.length > 0 ? <div>Yes</div> : <div>No</div>        
        ),
      },
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
      {id: 1, customer: "tom", date: new Date(2020, 5, 19, 12, 45), numPeople: 2, mealOrder: []},
      {id: 2, customer: "tom", date: new Date(2021, 5, 20, 12, 15), numPeople: 3, mealOrder: []},
      {id: 3, customer: "tom", date: new Date(2021, 5, 21, 18, 30), numPeople: 5, 
        mealOrder: [
          {item: "RISOTTO AUX CHAMPIGNONS SAUVAGES (GF)", qty: 1, unit: 40, price: 40},
          {item: "MEDAILLONS DE PORC AUX CÈPES", qty: 2, unit: 42, price: 84},
          {item: "TAGLIATELLE AUX CREVETTES ET ST JACQUES", qty: 2, unit: 25, price: 50},
          {item: "ESCARGOTS DE BOURGOGNE", qty: 2, unit: 22, price: 44},
          {item: "CLASSIC CRÈME BRÛLÉE", qty: 5, unit: 16, price: 80},
        ]
      },
      {id: 4, customer: "tom", date: new Date(2021, 5, 26, 11, 30), numPeople: 13, 
        mealOrder: [
          {item: "MOULES MARINIÈRE", qty: 3, unit: 22, price: 66},
          {item: "CONFIT DE CANARD", qty: 2, unit: 41, price: 82},
          {item: "BOEUF BOURGUIGNON (GF)", qty: 2, unit: 42, price: 84},
          {item: "PROFITEROLES", qty: 2, unit: 22, price: 44},
          {item: "ICE CREAM AND SORBETS", qty: 6, unit: 6, price: 36},
          {item: "LE COLONEL", qty: 7, unit: 8, price: 56},
        ]
      },
    ];
  

// In order to edit reservations have to view the details first.
class StaffReservationsController extends React.Component {
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
    return (
      <div
        onKeyDownCapture={(e) => {
          if (e.key === "Backspace" || e.key === "Delete") {
            e.stopPropagation();
          }
        }}
      >
        <Container maxWidth="xl">
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

export default StaffReservationsController;