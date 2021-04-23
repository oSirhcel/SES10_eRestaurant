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

const Review = ({values}) => {
  const classes = useStyles();

  return(
    <div>
      <Paper className={classes.paper}>
        <h1> Review Booking </h1>     

        <Typography>
          Date
        </Typography>
        {format(values.date, 'EEEE, do MMMM yyyy')} 
        <p/>

        <Typography>
          Session
        </Typography>
        {values.session} 
        <p/>

        <Typography>
          Time
        </Typography>
        {format(values.time, 'h:mm a')} 
        <p />

        <Typography>
          Number of People
        </Typography>
        {values.numPeople}  
        <p />
          
        <Button className={classes.button} type="submit" color="secondary" variant="contained">Submit</Button>
        </Paper>   
    </div>
  )
}

export default Review;
