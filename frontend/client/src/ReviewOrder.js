import React from 'react';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      maxWidth: 500,
    },
    divPaper: {
      padding: theme.spacing(1),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 300,
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      
    },
    button : {
        width: 100,
        
    }
  }));
  

const Review = ({values, prevStep}) => {
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.paper}>
            <h1> Review Booking </h1>           
            <p>Date: {format(values.date, 'dd/MM/yyyy')} </p>
            <p>Session: {values.session} </p>
            <p>Time {values.time}</p>
            <p>Number of People: {values.numPeople} </p> <br/>
            <Button className={classes.button}>Submit</Button><br/>
            <Button className={classes.button} onClick = {() => prevStep()}>Back</Button>
            </Paper>
            
        </div>
    )
}

export default Review;