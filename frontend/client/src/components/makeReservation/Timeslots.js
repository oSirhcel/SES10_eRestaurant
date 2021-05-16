import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { format } from 'date-fns';

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

const TimeRange = (beginT, endT) => {
  const times=[];
  const startH = format(beginT, 'H');
  const endH = format(endT, 'H');
  const endM = format(endT, 'mm');
  for (var h = startH; h <= endH; h++) {
      for (var m = 0; m <= 3; m++) {
          if (!(h == endH && m*15 > endM)) //Timeslots are every 15 min. Can change this but will have to do some maths.
              times.push(new Date(0, 0, 0, h, m*15)); //The date is arbitrary. Only care about the time. 
      }
  }
  return times;      
}


// I couldn't figure out how to show a button had been selected :( 
// ceebs with CSS tings.
const Timeslots = ({start, end, handleTimeSelect}) => {

  return (
      <div>
          <Grid container spacing={3}>
            
              {TimeRange(start, end).map(timeslot =>(
              <Grid item xs={6} sm={3}>
                  <Button 
                  onClick = {() => handleTimeSelect(timeslot)}
                  >
                  {format(timeslot, 'h:mm a')} 
                  </Button>
          </Grid>
              ))}
            
          </Grid>
                      
      </div>
  )
}
  


export default Timeslots;