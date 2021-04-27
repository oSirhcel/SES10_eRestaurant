import React from 'react';
import InvoicesDataGrid from '../components/editInvoice/InvoicesDataGrid';
import AdminViewFrame from '../components/viewFrames/AdminViewFrame';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import ViewInvoiceStepper from '../components/editInvoice/ViewInvoiceStepper';


// The time is derived from the date. The details button is a separate column
const columns = (nextStep) => {
    return (
    [
      { field: 'id', headerName: 'Reservation ID', type: 'number', width: 200},
      { 
        field: 'customerID', 
        headerName: 'CustomerID', 
        type: 'number', 
      },
       
      { field: 'firstName', headerName: 'First Name', width: 130},
      { field: 'lastName', headerName: 'Last Name', width: 130},
      { 
        field: 'price', 
        headerName: 'Price', 
        width: 130,
        valueFormatter: (params) => params.value.toFixed(2), 
      },
      { 
        field: 'altPrice', 
        headerName: 'Alternative Price', 
        width: 130,
        valueFormatter: (params) => params.value.toFixed(2), 
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
const mealOrder1 = [
    {id: 1, itemName: "Ratatouille", price: 10.00},
    {id: 2, itemName: "Profiteroles", price: 20.00},
    {id: 3, itemName: "Chocolate Souffle", price: 15.50},
    {id: 4, itemName: "Quiche Lorraine", price: 17.25},
    {id: 5, itemName: "Escargo", price: 21.00},
]

const mealOrder2 = [
    {id: 6, itemName: "Genoise Cake", price: 12.00},
    {id: 7, itemName: "Chicken la di da", price: 6.00},
    {id: 8, itemName: "Duck a l`Orange", price: 50.00},
]

const mealOrder3 = [
    {id: 9, itemName: "Strawberry Coconut Macarons", price: 20.00},
    {id: 10, itemName: "Oysters", price: 16.00},
    {id: 11, itemName: "Lobster Mornay", price: 13.50},
]

const rows = [
    {id: 101, customerID: 101, firstName: 'John', lastName: 'Smith', price: 50.00, altPrice: 0.00, mealOrder: mealOrder1},
    {id: 102, customerID: 102, firstName: 'Jane', lastName: 'Doe', price: 100.25, altPrice: 0.00, mealOrder: mealOrder2},
    {id: 103, customerID: 103, firstName: 'Gordon', lastName: 'Ramsey', price: 250.00, altPrice: 0.00, mealOrder: mealOrder3},
];

    

// In order to edit reservations have to view the details first.
class InvoiceDataGridController extends React.Component {
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

        <ViewInvoiceStepper
          step = {this.state.step}
          prevStep = {this.prevStep}
          invoiceData = {this.state.selectedRow}
          handleRowSelected={this.handleRowSelected}
          handleDelete={this.handleDelete}
          columns={columns(this.nextStep)}
          rows={this.state.rows}
        />

      </div>
            
    )
  }
}

const ViewInvoicesStage = () => {
  return (
    <AdminViewFrame element = {<InvoiceDataGridController />}/>
  )
}

export default ViewInvoicesStage;