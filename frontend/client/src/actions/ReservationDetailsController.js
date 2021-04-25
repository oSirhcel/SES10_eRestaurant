import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import ReservationDetailsForm from '../components/customerReservations/ReservationDetailsForm';

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


const ReservationDetailsController = ({reservationData}) => {
    const [selectedDate, handleDateSelect] = React.useState(reservationData.data.date);
    const [selectedTime, setSelectedTime] = React.useState(reservationData.data.date);
    const [numPeople, setNumPeople] = React.useState(reservationData.data.numPeople);
    const [mealOrder, setMealOrder] = React.useState(reservationData.data.mealOrder);

    const [currentlyEditing, setEdit] = React.useState(false);
    const [session, setSession] = React.useState(''); //Used to show which timeslots
    
    const [timeClicked, setTimeClicked] = React.useState(false); //Flag for when user wants to see timeslots.

    const lunchStart = new Date (0, 0, 0, 11);
    const lunchEnd = new Date (0, 0, 0, 14, 30);
    const dinnerStart = new Date (0, 0, 0, 17);
    const dinnerEnd = new Date (0, 0, 0, 21, 30);
    
    
    const handleTimeSelection = (timeslot) => {
        setSelectedTime(timeslot);
    }

    //The view where the times stuff goes.
    const [times, setTime] = React.useState(
    <TextField
        value={format(selectedTime, 'h:mm a')}
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
    
    // Sets the timeslots shown depending on which session was selected.
    const handleSessionSelection = (event) => {
        if (event.target.value == "Lunch") {
            setTime(Timeslots(lunchStart, lunchEnd, handleTimeSelection));
        } else {
            setTime(Timeslots(dinnerStart, dinnerEnd, handleTimeSelection));
        }
    }

    // If a new Date was selected then the time needs to be chosen again.
    const handleDateChange = (date, Session) => {
        handleDateSelect(date);
        handleTimeSelection(0);
        setTimeClicked(true);
        setTime('');
        setSession(Session(handleSessionSelection));
    }

    // Doesn't actually alert anything excepts objects. Just some dummy code for submitting stuff.
    const handleSubmit = () => {
        alert(
            <p>
                Date: {format(selectedDate, 'd MMM yyyy')} <br />
                Time: {format(selectedTime, 'h:mm a')} <br />
                Number of People: {numPeople} <br />
                Meal Order: {mealOrder} <br />
            </p>
        );
    }

    //Resets all the states basically.
    const handleCancel = () => {
        handleDateSelect(reservationData.data.date);
        setNumPeople(reservationData.data.numPeople);
        setMealOrder(reservationData.data.mealOrder);
        setSelectedTime(reservationData.data.date);
        setEdit(false);
        setSession('');
        setTimeClicked(false);
        setTime(
            <TextField
                value={format(reservationData.data.date, 'h:mm a')}
                onClick={() => {
                    if (format(reservationData.data.date, 'h') <= format(lunchEnd, 'h')) {
                        setTimeClicked(true);
                        setTime(Timeslots(lunchStart, lunchEnd, handleTimeSelection));
                    } else {
                        setTime(Timeslots(dinnerStart, dinnerEnd, handleTimeSelection));
                    }
                }                  
                }
            />
        );
    }

    //Returns the view
    return (
        <ReservationDetailsForm 
            currentlyEditing = {currentlyEditing}
            setEdit = {setEdit}
            reservationData = {reservationData}
            handleDateChange = {handleDateChange}
            selectedDate = {selectedDate}
            timeClicked = {timeClicked}
            selectedTime = {selectedTime}
            setNumPeople = {setNumPeople}
            numPeople = {numPeople}
            session = {session}
            times = {times}
            handleSubmit = {handleSubmit}
            handleCancel = {handleCancel}
            setMealOrder = {setMealOrder}
        />
    )
}

export default ReservationDetailsController;