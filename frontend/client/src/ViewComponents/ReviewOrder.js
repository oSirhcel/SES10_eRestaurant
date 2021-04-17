import React from 'react';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(4),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
      maxWidth: 500,
    },
    button : {
        width: 100,      
    }
}));

const timeToString = (time) => {
  if (time == '') {
    return('Please select a Time');
  }
    if (time.h > 12 ) {
      if (time.m == 0) {
        return ((time.h-12)+":"+time.m+time.m+"PM");
      }
      return( (time.h-12)+":"+time.m+"PM" );
    }
    if (time.m == 0) {
      if (time.h == 12) {
        return (time.h+":"+time.m+time.m+"PM");
      }        
      return ((time.h)+":"+time.m+time.m+"AM");
    }
    if (time.h == 12) {
      return( time.h+":"+time.m+"PM");
    }    
    return( time.h+":"+time.m+"AM");
}

const Review = ({values}) => {
  const classes = useStyles();

  return(
    <div>
      <Paper className={classes.paper}>
        <h1> Review Booking </h1>        
        <Typography variant="h6">
          <p>
            Date: {format(values.date, 'EEEE, do MMMM yyyy')} 
          </p>
          <p>
            Session: {values.session} 
          </p>
          <p>
            Time: {timeToString(values.time)} 
          </p>
          <p>
            Number of People: {values.numPeople} 
          </p>
        </Typography>
        <Button className={classes.button} color="secondary" variant="contained">Submit</Button>
           
        </Paper>
            
    </div>
  )
}

export default Review;