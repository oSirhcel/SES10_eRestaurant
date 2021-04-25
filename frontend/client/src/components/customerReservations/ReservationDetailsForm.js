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


// Radio Buttons for selecting the Session
const Session = (handleSessionSelection) => {
    return (
        <FormControl component="fieldset">
        <FormLabel component="legend">Session</FormLabel>
        <RadioGroup aria-label="Session" name="session" onChange={(event) => handleSessionSelection(event)}>
        <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
        <FormControlLabel value="Dinner" control={<Radio />} label="Dinner"/>
        </RadioGroup>
        </FormControl>
    )
}

// Reservation Details View
const ReservationDetailsForm = ({
    currentlyEditing, setEdit, reservationData, handleDateChange, 
    selectedDate, timeClicked, selectedTime, setNumPeople, numPeople, session, times,
    handleCancel, handleSubmit, handleSessionSelection, setMealOrder
}) => {
    return (
        <div>
            <Paper>
                {currentlyEditing}
                <Box p={3}>
                <form onSubmit = {handleSubmit}>  
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm = {6}>
                            <h1> Reservation Details </h1>
                        </Grid>
                        <Grid item xs={12} sm = {6} align="right">
                            <Button
                                disabled={isBefore(new Date(format(selectedDate, 'yyyy-MM-dd') ), new Date())}
                                onClick={() => setEdit(true)}
                            > 
                                <EditIcon /> 
                            </Button>
                        </Grid>
                    </Grid>
                
                <Typography>
                    Booking Number
                </Typography> 
                {currentlyEditing ? (
                    <TextField
                        defaultValue={reservationData.data.id}
                        disabled
                    />
                    ) : (
                        reservationData.data.id
                )}
                <p/>

                <Typography>
                    Date
                </Typography>  
                {currentlyEditing ? (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        orientation="landscape"
                        openTo="date"
                        onChange={(e) => handleDateChange(e, Session)}
                        value={selectedDate}
                        format='d MMM yyyy'
                        disablePast
                    />
                    </MuiPickersUtilsProvider>
                    ) : (
                        format(reservationData.data.date, 'd MMM yyyy')
                )}
                <p/>       
                        {session}
                <Typography>
                    Time
                </Typography>
                {currentlyEditing ? (
                    <div>
                        {/*Textfield to show which timeslot the user has selected.*/}    

                        {timeClicked ? (
                        <TextField
                            value={selectedTime != 0 ? format(selectedTime, 'h:mm a') : ''}
                        />
                        ) : ('')}
                        {times}
                    </div>
                    
                    
                    ) : (
                        format(reservationData.data.date, 'h:mm a')
                )}
                <p/>

                <Typography>
                    Number of People
                </Typography>
                {/*Ensure the number of people is between 1 and 20 (inclusive).
                    Can change these values */}
                {currentlyEditing ? (  
                    <div>
                        <TextField
                            id="outlined-number"
                            type="number"
                            onChange={(e) => setNumPeople(e.target.value)}
                            InputProps={{
                                inputProps: { 
                                    max: 20, 
                                    min: 1 ,
                                    onKeyDown: (event) => {
                                        event.preventDefault();
                                    },
                                }
                            }}
                            defaultValue = {numPeople}
                        />

                        <Typography variant = "body2" color = "secondary">
                            Maximum number of people is 20
                        </Typography>
                    </div>                                    
                    ) : (
                        reservationData.data.numPeople
                )}
                <p/>

                <Typography>
                    {/*Will need to add edit meal order stuff here */}
                    Meal Order
                </Typography>
                {currentlyEditing ? (
                    <TextField
                        defaultValue={reservationData.data.mealOrder}
                        onChange={(e) => setMealOrder(e.target.value)}
                    />
                    ) : (
                        reservationData.data.mealOrder
                )}


                <p/>


                {currentlyEditing ? (
                    <div>
                        <Button
                            type="submit"
                            disabled={selectedTime == 0}
                        > 
                            Confirm
                        </Button>
                        <Button
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                    </div>
                    ) : (
                        ''
                )}


            </form>
            </Box>

        </Paper>
    </div>
)
}

export default ReservationDetailsForm;
