import React from 'react';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ReviewTable from '../createMealOrder/ReviewTable';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(4),
      display: 'flex',
      maxWidth: 1000,
    },
    button : {
        width: 100,      
    }
}));

const Review = ({values, mealOrderButton, mealOrder}) => {
  const classes = useStyles();

  return(
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
        <Typography>
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
          
        <Button 
          className={classes.button} 
          type="submit" 
          color="secondary" 
          variant="contained"
        >
          Submit
        </Button>
        </Typography>
        </Paper>   
        </Grid>
        <Grid item xs={12}>
          {
            mealOrder 
            ? (
              <Paper className={classes.paper}>
                <ReviewTable rows={mealOrder} title = "Meal Order" />
                
              </Paper>
            )
             : ''
          }
          
        </Grid>
      </Grid>
        {mealOrderButton}
    </div>
  )
}

export default Review;
