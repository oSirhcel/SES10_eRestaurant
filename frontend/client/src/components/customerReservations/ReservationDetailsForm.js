import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { format } from 'date-fns';
import EditIcon from '@material-ui/icons/Edit';
import { DatePicker, MuiPickersUtilsProvider, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns'; 
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const TimeRange = (beginT, endT) => {
    const times=[];
    const startH = format(beginT, 'H');
    const endH = format(endT, 'H');
    const endM = format(endT, 'mm');
    for (var h = startH; h <= endH; h++) {
        for (var m = 0; m <= 3; m++) {
            if (!(h == endH && m*15 > endM))
                times.push(new Date(0, 0, 0, h, m*15));
        }
    }
    return times;      
}

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

const Timeslots = (lunchStart, lunchEnd, handleTimeSelection) => {
    return (
        <div>
            <Grid container spacing={3}>
              
                {TimeRange(lunchStart, lunchEnd).map(timeslot =>(
                <Grid item xs={6} sm={3}>
                    <Button 
                    onClick = {() => handleTimeSelection(timeslot)}
                    >
                    {format(timeslot, 'h:mm a')} 
                    </Button>
                </Grid>
                ))}
              
            </Grid>
                        
        </div>
    )
}

/**/

const ReservationDetailsForm = ({reservationData}) => {
    const [selectedDate, handleDateSelect] = React.useState(reservationData.data.date);
    const [numPeople, setNumPeople] = React.useState(reservationData.data.numPeople);
    const [mealOrder, setMealOrder] = React.useState(reservationData.data.mealOrder);
    const [selectedTime, setSelectedTime] = React.useState(reservationData.data.date);

    const [currentlyEditing, setEdit] = React.useState(false);
    const [session, setSession] = React.useState('');

    const lunchStart = new Date (0, 0, 0, 11);
    const lunchEnd = new Date (0, 0, 0, 14, 30);
    const dinnerStart = new Date (0, 0, 0, 17);
    const dinnerEnd = new Date (0, 0, 0, 21, 30);
    
    const [timeClicked, setTimeClicked] = React.useState(false);
    
    const handleTimeSelection = (timeslot) => {
        setSelectedTime(timeslot);
    }

    const [times, setTime] = React.useState(<TextField
        defaultValue={format(reservationData.data.date, 'h:mm a')}
        onClick={() => {
            if (format(reservationData.data.date, 'h') <= format(lunchEnd, 'h')) {
                setTimeClicked(true);
                setTime(Timeslots(lunchStart, lunchEnd, handleTimeSelection));
            } else {
                setTime(Timeslots(dinnerStart, dinnerEnd, handleTimeSelection));
            }
        }                  
        }
    />);
    
    const handleSessionSelection = (event) => {
        if (event.target.value == "Lunch") {
            setTime(Timeslots(lunchStart, lunchEnd, handleTimeSelection));
        } else {
            setTime(Timeslots(dinnerStart, dinnerEnd, handleTimeSelection));
        }
    }

    const handleDateChange = (date) => {
        handleDateSelect(date);
        setTime('');
        setSession(Session(handleSessionSelection));
    }

    const handleSubmit = () => {
        alert("submitted");
    }

    return (
        <div>
            <Paper>
                {currentlyEditing}
                <Box p={3}>
                <form>  
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm = {6}>
                            <h1> Reservation Details </h1>
                        </Grid>
                        <Grid item xs={12} sm = {6} align="right">
                            <Button> 
                                <EditIcon 
                                    onClick={() => setEdit(true)}
                                /> 
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
                        onChange={handleDateChange}
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
                        {timeClicked ? (
                        <TextField
                            value={format(selectedTime, 'h:mm a')}
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
                {currentlyEditing ? (
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
                    ) : (
                        reservationData.data.numPeople
                )}
                <p/>

                <Typography>
                    Meal Order
                </Typography>
                {currentlyEditing ? (
                    <TextField
                        defaultValue={reservationData.data.mealOrder}
                    />
                    ) : (
                        reservationData.data.mealOrder
                )}
                <p/>
                {currentlyEditing ? (
                    <Button
                        type="submit"
                    > 
                    Confirm
                    </Button>
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