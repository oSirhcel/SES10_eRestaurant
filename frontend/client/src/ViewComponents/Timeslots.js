import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
  },
  clickedButton: {
    width: 100,
  }
}));

const times = (startH, lastH) => {
  const times = [];
   for (var hours = startH; hours <= lastH; hours++) {
    for (var minutes = 0; minutes <= 3; minutes++) {
      var m = minutes*15;
      if (!(hours == lastH && m == 45))
       times.push({h: hours, m: m });
    }
   }
  return times; 
}

const timeToString = (time) => {
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

const Timeslots = ({session, handleTimeSelect}) => {
const classes = useStyles();
const lunch = times(11, 14);
const dinner = times(17, 21);
const showTimes = (session == 'Lunch' ? lunch : dinner);
    
  return (
    <div className={classes.root}>

      <Grid container spacing={3}>

        {showTimes.map(timeslot =>(
          <Grid item xs={6} sm={3}>
            <Button 
              className={classes.button}
              onClick={() => handleTimeSelect(timeslot)}
            >
              {timeToString(timeslot)} 
            </Button>
          </Grid>
        ))}

      </Grid>
          
    </div>
  );
}

export default Timeslots;