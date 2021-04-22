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
    
    const handleSessionSelection = (event) => {
        if (event.target.value == "Lunch") {
            setTime(Timeslots(lunchStart, lunchEnd, handleTimeSelection));
        } else {
            setTime(Timeslots(dinnerStart, dinnerEnd, handleTimeSelection));
        }
    }

    const handleDateChange = (date, Session) => {
        handleDateSelect(date);
        handleTimeSelection(0);
        setTimeClicked(true);
        setTime('');
        setSession(Session(handleSessionSelection));
    }

    const handleSubmit = () => {
        alert("submitted");
    }

    const handleCancel = () => {
        setSession('');
        setTime('');
        setSelectedTime(reservationData.data.date);
        setEdit(false);
    }

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
        />
    )
}

export default ReservationDetailsController;