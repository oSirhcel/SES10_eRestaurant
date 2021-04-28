import React from 'react';
import StaffRecordsDataGrid from './StaffRecordsDataGrid';
import AdminViewFrame from '../viewFrames/AdminViewFrame';

const columns = [
    { field: 'id', headerName: 'Staff ID', type: 'number', width: 130},
    { field: 'firstName', headerName: 'First name', width: 130},
    { field: 'lastName', headerName: 'Last name', width: 130},
    { field: 'position', headerName: 'Position', width: 130},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'phone', headerName: 'Phone', width: 130},
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  
  const rows = [
      {id: 101, firstName: 'Remy', lastName: 'Rat', position: 'Head Chef', email: 'remy@gmail.com', phone: '0410000001'},
      {id: 102, firstName: 'Alfredo', lastName: 'Linguini', position: 'Head Waiter', email: 'alfredoLinguini@gmail.com', phone: '0410000002'},
      {id: 103, firstName: 'Colette', lastName: 'Tatou', position: 'Sous Chef', email: 'coletteTatou@gmail.com', phone: '0410000003'},
      {id: 104, firstName: 'Krem', lastName: 'Brewlay', position: 'Pastry Chef', email: 'kremBrewlay@gmail.com', phone: '0410000004'},
      {id: 105, firstName: 'Pepé', lastName: 'Le Pew', position: 'Restaurant Manager', email: 'plp@gmail.com', phone: '0410000005'},
      {id: 106, firstName: 'Crokom', lastName: 'Bush', position: 'Accountant', email: 'profiteroles@gmail.com', phone: '0410000006'},
      {id: 107, firstName: 'Au', lastName: 'Revoir', position: 'Waiter', email: 'aurevoir@gmail.com', phone: '0410000007'},
  ];

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

const Stage = () => {
    return (
      <AdminViewFrame element = {<StaffRecordsDataGridController />}/>
    )
  }

  export default Stage;