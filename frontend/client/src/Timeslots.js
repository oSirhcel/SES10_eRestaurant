/**/
  import React from 'react';
  import { makeStyles } from '@material-ui/core/styles';
  import Button from '@material-ui/core/Button';
  import Paper from '@material-ui/core/Paper';
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

  const lunch = [
    {time: "11:30AM"},
    {time: "11:45AM"},
    {time: "12:00PM"},
    {time: "12:15PM"},
    {time: "12:30PM"},
    {time: "12:45PM"},
    {time: "1:00PM"},
    {time: "1:15PM"},
    {time: "1:30PM"},
    {time: "1:45PM"},
    {time: "2:00PM"},
    {time: "2:15PM"},
    {time: "2:30PM"},
  ];

  const dinner = [
    {time: "5:00PM"},
    {time: "5:15PM"},
    {time: "5:30PM"},
    {time: "5:45PM"},
    {time: "6:00PM"},
    {time: "6:15PM"},
    {time: "6:30PM"},
    {time: "6:45PM"},
    {time: "7:00PM"},
    {time: "7:15PM"},
    {time: "7:30PM"},
    {time: "7:45PM"},
    {time: "8:00PM"},
    {time: "8:15PM"},
    {time: "8:30PM"},
    {time: "8:45PM"},
    {time: "9:00PM"},
    {time: "9:15PM"},
    {time: "9:30PM"},
  ];

 const Timeslots = ({session, nextStep, prevStep, handleTimeSelect}) => {
    const classes = useStyles();
    const showTimes = (session == 'Lunch' ? lunch : dinner);
      return (
        <div className={classes.root}>
          <Grid container spacing={3}>
              {showTimes.map(timeslot =>(
              <Grid item xs={6} sm={3}>
                  <Button 
                  className={classes.button}
                  onClick={() => handleTimeSelect(timeslot.time)}
                  >{timeslot.time}</Button>
              </Grid>
              ))}
          </Grid>
          <Button onClick = {() => prevStep()}>Back</Button>
          <Button onClick = {() => nextStep()}>Next</Button> 
        </div>
      );
}

  export default Timeslots;