import React from 'react';
import StaffRecordsDataGrid from './staff-recordsDataGrid';
import AdminViewFrame from '../viewFrames/AdminViewFrame';

const columns = [
    { field: 'id', headerName: 'Staff ID', type: 'number', width: 130},
    { field: 'firstName', headerName: 'First name', width: 130},
    { field: 'lastName', headerName: 'Last name', width: 130},
    { field: 'position', headerName: 'Position', width: 130},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'phone', headerName: 'Phone', width: 130},
  ];
  
  const rows = [
      {id: 1, firstName: 'Remy', lastName: 'Rat', position: 'Head Chef', email: 'remy@gmail.com', phone: '1234567891', password: 1234},
      {id: 2, firstName: 'Alfredo', lastName: 'Linguini', position: 'Head Waiter', email: 'alfredoLinguini@gmail.com', phone: '1234567892', password: 1234},
      {id: 3, firstName: 'Pepé', lastName: 'Le Pew', position: 'Restaurant Manager', email: 'plp@gmail.com', phone: '1234567893', password: 1234},
    ];

  /*{id: 101, firstName: 'Remy', lastName: 'Rat', position: 'Head Chef', email: 'remy@gmail.com', phone: '0410000001'},
      {id: 102, firstName: 'Alfredo', lastName: 'Linguini', position: 'Head Waiter', email: 'alfredoLinguini@gmail.com', phone: '0410000002'},
      {id: 103, firstName: 'Colette', lastName: 'Tatou', position: 'Sous Chef', email: 'coletteTatou@gmail.com', phone: '0410000003'},
      {id: 104, firstName: 'Krem', lastName: 'Brewlay', position: 'Pastry Chef', email: 'kremBrewlay@gmail.com', phone: '0410000004'},
      {id: 105, firstName: 'Pepé', lastName: 'Le Pew', position: 'Restaurant Manager', email: 'plp@gmail.com', phone: '0410000005'},
      {id: 106, firstName: 'Crokom', lastName: 'Bush', position: 'Accountant', email: 'profiteroles@gmail.com', phone: '0410000006'},
      {id: 107, firstName: 'Au', lastName: 'Revoir', position: 'Waiter', email: 'aurevoir@gmail.com', phone: '0410000007'},
 */

class StaffRecordsDataGridController extends React.Component {
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

    //Will probably need to store editValue in the state so it can be updated in the database.
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
    /*The onKeyDownCapture prevents the user deleting/backspacing the cell's text without double clicking it */
    render() {
        return(
            <div
            
            onKeyDownCapture={(e) => {
                if (e.key === "Backspace" || e.key === "Delete") {
                  e.stopPropagation();
                }
              }}
            >
                
            <StaffRecordsDataGrid 
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

  export default StaffRecordsDataGridController;
