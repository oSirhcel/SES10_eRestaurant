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

import InputAdornment from '@material-ui/core/InputAdornment';


const columns = [
    { field: 'itemName', headerName: 'Item', width: 300},
    { field: 'qty', headerName: 'Quantity', width: 130},
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
    currentlyEditing, handleSubmit, reservation, mealOrder, setAdjustedTotal, adjustedTotal
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
                    </Grid>
                    <Typography>
                        Reservation ID
                    </Typography>
                    {reservation.reservationId}
                    <p />
                
                    <Typography>
                        Customer
                    </Typography>
                    {reservation.name}
                    <p />

                    <Typography>
                        Date
                    </Typography>
                    {format(reservation.dateTime, 'EEEE, do MMMM yyyy')}
                    <p />

                    <Typography>
                        Time
                    </Typography>
                    {format(reservation.dateTime, 'h:mm a')}
                    <p />

                    <Typography>
                        Meal Order
                    </Typography>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows = {mealOrder}
                            columns = {columns}
                            autoPageSize = {true}
                        />
                    </div>
                    <p />

                    <Typography variant="h5">
                        Total
                    </Typography>
                    <Typography variant="h5">
                    ${reservation.amount.toFixed(2)}
                    </Typography>
                    <p />

                    <TextField
                        label="Adjusted Total"
                        id="adjustedTotal"
                        type="number"
                        defaultValue={reservation.amount.toFixed(2)}
                        inputProps={{ 
                            step: "0.01",                      
                        }}
                        InputProps={{ 
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        onChange = {(event) => setAdjustedTotal(parseFloat(event.target.value))}
                    />      

                    <p />

                    {adjustedTotal != reservation.amount ? (
                        <Button type="submit"> Save adjusted Total </Button>
                    ) : (
                        ''
                    )}

            </form>
            </Box>

        </Paper>
    </div>
)
}

export default InvoiceDetailsForm;
