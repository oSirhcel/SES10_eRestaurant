import React from 'react';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';

const Review = ({values, prevStep}) => {
    return(
        <div>
            <h1> Review Booking </h1>
            
            <p>Date: {format(values.date, 'dd/MM/yyyy')} </p>
            <p>Session: {values.session} </p>
            <p>Time {values.time}</p>
            <p>Number of People: {values.numPeople} </p>
            <Button>Submit</Button><br/>
            <Button onClick = {() => prevStep()}>Back</Button>
        </div>
    )
}

export default Review;