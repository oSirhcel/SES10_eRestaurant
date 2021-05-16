import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

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

class DataTable extends React.Component {
    state = {
        selectedRow:'',
        disableButton: true,
    }

    rowClicked = (a) => {
        this.setState({ selectedRow : a.data.firstName, disableButton: false});
      }
    render() {
        return (
            <div style={{ height: 400, width: '100%' }}>
            <p> Showing row data can be accessed. First name of selected row: {this.state.selectedRow}</p>
            <Button
            disabled={this.state.disableButton}
            >
              <EditIcon/>
            </Button>
            <Button
            disabled={this.state.disableButton}
            >
              <DeleteIcon/>
            </Button
            >
            <DataGrid 
            rows={rows} 
            columns={columns} 
            autoPageSize = {true}
            density = {'compact'}
            checkboxSelection = {false}  
            disableColumnResize = {false}
            onRowSelected={(data) => this.rowClicked(data)}
            />
        </div>
        )
    }
}


/*const DataTable = (props) => {
    const [select, getSelectedRow] = React.useState([]);
    const [disable, enableButton] = React.useState([]);
    return (
        <div style={{ height: 400, width: '100%' }}>
        <Button
        disabled = {disable}
        >
          <DeleteIcon/>
        </Button>
        <Button
        disabled = {disable}
        >
            <EditIcon/>
        </Button>
        <DataGrid 
        rows={rows} 
        columns={columns} 
        checkboxSelection = {false}  
        pageSize = {5}
        onRowSelected={(data) => {getSelectedRow(data); enableButton(false);}}
        />
    </div>
    )
}*/

export default DataTable;