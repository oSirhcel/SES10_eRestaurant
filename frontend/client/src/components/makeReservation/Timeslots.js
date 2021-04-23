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
          if (!(h == endH && m*15 > endM))
              times.push(new Date(0, 0, 0, h, m*15));
      }
  }
  return times;      
}

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