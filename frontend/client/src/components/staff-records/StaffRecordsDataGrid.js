import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class CustomerReservationsDataGrid extends React.Component {
    state = {
        disableButton: true,
    }
    
    render() {
      const { handleRowSelected, handleCellClicked, handleDelete, handleEdit, handleValueChange } = this.props;
        return (
            <div style={{ height: 350, width: '100%' }}>
              {/*positions the DataGrid title and delete Button*/}
              <Grid container spacing={3}>
                <Grid item xs={12} sm = {6}>
                <Typography><h1> Staff Records </h1> </Typography>
                </Grid>
                <Grid item xs={12} sm = {6} align="right">
                <Button
                disabled={this.state.disableButton}
                onClick={() => handleDelete(this.state.selectedRow)}
                >
              <DeleteIcon/>
            </Button>
                </Grid>
              </Grid>
              
            
            <DataGrid 
              rows={this.props.rows} 
              columns={this.props.columns} 
              autoPageSize = {true}
              density = {'compact'}  
              disableColumnResize = {false}
              onRowSelected={(data) => {this.setState({ disableButton: false}); handleRowSelected(data)}}
              onCellClick={(cell) => handleCellClicked(cell)}
              onCellDoubleClick={() => handleEdit()}
              onCellValueChange={() => handleValueChange()}
            />
            
        </div>
        )
    }
}

export default CustomerReservationsDataGrid;