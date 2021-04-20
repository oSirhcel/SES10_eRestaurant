import React from 'react';
import CustomerReservationsDataGrid from './ViewComponents/CustomerReservationsDataGrid';
import CustomerViewFrame from './ViewComponents/CustomerViewFrame';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns'

const columns = [
    { field: 'id', headerName: 'Reservation ID', type: 'number', width: 200},
    { 
        field: 'date', 
        headerName: 'Date', 
        type: 'date',
        width: 130, 
        renderCell: (params) => (       
              `${format(params.value, 'dd MMM yyyy')}`           
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
            >
                Details
            </Button>
        )
    },
  ];
  
  const rows = [
      {id: 101, date: new Date(2021, 4, 19, 11, 15), time: "11AM", numPeople: 12, mealOrder: 'No'},
      {id: 102, date: new Date(2021, 4, 20, 11, 30), time: "11:30AM", numPeople: 2, mealOrder: 'Yes'},
      {id: 103, date: new Date(2021, 6, 20, 12, 30), time: "12:30PM", numPeople: 4, mealOrder: 'Yes'},
      {id: 104, date: new Date(2021, 7, 22, 18, 15), time: "6:15PM", numPeople: 6, mealOrder: 'Yes'},
      {id: 105, date: new Date(1999, 7, 22, 11, 0), time: "8:00PM", numPeople: 15, mealOrder: 'No'},
    ];
  
 
class CustomerReservationsController extends React.Component {
    state = {
        columns: columns,
        rows: rows,
        selectedRow:'',
        selectedCell:'',
    }

    handleRowSelected = (row) => {
        this.setState({selectedRow : row});
    }

    handleCellClicked = (cell) => {
        this.setState({selectedCell : cell});
    }

    handleDelete = () => {
        this.setState(state => ({
            rows : state.rows.filter((row, j) => row.id != this.state.selectedRow.data.id)
        }));
    }

    handleEdit = () => {
        const selectedCell = this.state.selectedCell;
        selectedCell.api.setCellMode(selectedCell.id, selectedCell.field, "edit");
    }

    handleValueChange = () => {
        const selectedCell = this.state.selectedCell;
        const editValue = selectedCell.api.getEditCellValueParams(selectedCell.id, selectedCell.field).value;
        const id = selectedCell.id;
        const field = selectedCell.field;
        this.setState(state => ({
            rows: state.rows.map(
              (row) => {
                  if (row.id == id) {
                      return ({ ...row, [field]: editValue })
                  } else {
                      return row;
                  }
              }
          )}));
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
                
            <CustomerReservationsDataGrid
                handleRowSelected={this.handleRowSelected}
                handleCellClicked={this.handleCellClicked}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
                handleValueChange={this.handleValueChange}
                columns={this.state.columns}
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