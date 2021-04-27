import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { format, isBefore } from 'date-fns';
import EditIcon from '@material-ui/icons/Edit';
import { DatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {DataGrid} from '@material-ui/data-grid';


const columns = [
    { field: 'itemName', headerName: 'Item', width: 300},
    { 
        field: 'price', 
        headerName: 'Price', 
        width: 130,
        valueFormatter: (params) => params.value.toFixed(2), 
      },
]


// Radio Buttons for selecting the Session

// Reservation Details View
const InvoiceDetailsForm = ({
    currentlyEditing, setEdit, invoiceData, 
    handleCancel, handleSubmit,
}) => {
    return (
        <div>
            <Paper>
                {currentlyEditing}
                <Box p={3}>
                <form onSubmit = {handleSubmit}>  
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm = {6}>
                            <h1> Invoice Details </h1>
                        </Grid>
                        <Grid item xs={12} sm = {6} align="right">
                            <Button
                                onClick={() => setEdit(true)}
                            > 
                                <EditIcon /> 
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography>
                        Reservation ID
                    </Typography>
                    {invoiceData.data.id}
                    <p />
                
                    <Typography>
                        Customer
                    </Typography>
                    {invoiceData.data.firstName} {invoiceData.data.lastName}
                    <p />

                    <Typography>
                        Meal Order
                    </Typography>
                    <div style={{ height: 350, width: '100%' }}>
                        <DataGrid
                            rows = {invoiceData.data.mealOrder}
                            columns = {columns}
                            autoPageSize = {true}
                        />
                    </div>
                    

            </form>
            </Box>

        </Paper>
    </div>
)
}

export default InvoiceDetailsForm;
