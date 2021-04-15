import React from 'react';
import DataTable from './DataGrid';

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

export default class DataGridController extends React.Component {
    state = {
        columns: columns,
        rows: rows,
    }

    handleDelete = (selectedRow) => {
        this.setState(state => ({
            rows : rows.filter((row, j) => row.id != selectedRow.data.id)
        }));
    }
    render() {
        return(
            <div>
                <h1>{this.state.columns[0].headerName}</h1>
                <DataTable 
            handleDelete={this.handleDelete}
            columns={this.state.columns}
            rows={this.state.rows}
            />
            </div>
            
        )
    }
}