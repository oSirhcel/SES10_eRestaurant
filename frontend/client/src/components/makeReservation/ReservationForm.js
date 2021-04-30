import React, { Component } from 'react';
import Timeslots from './Timeslots';
import Button from '@material-ui/core/Button';
import Review from './ReviewOrder';
import FormDate from './FormDate';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { format } from 'date-fns';

export class ReservationForm extends Component {
  
  render() {
    const { step } = this.props;
    const { date, session, time, numPeople } = this.props;
    const { nextStep, prevStep, handleChange, handleDateSelect, handleTimeSelect, timeToString, handleOnSubmit } = this.props;
    const {timeBoundaries, handleSession} = this.props;
    const values = { date, session, time, numPeople };
    

    

    switch (step) {
      case 1:
        return (
            <div>
              <Typography>
                <h1> Book a Table </h1>
              </Typography>
              

              <FormDate
                handleChange={handleChange}
                handleDateSelect={handleDateSelect}
                handleSession = {handleSession}
                values={values}
                selectedDate={date}
              />

              <Button onClick={nextStep} color="primary" disabled={numPeople <= 0 || numPeople > 20}>Next</Button>

            </div>
          
        );
      case 2:
        return (
            <div>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography>
                    <h1> Pick a Time </h1>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} align="center">
                  {/*Shows the time the user has selected cuz I
                  couldn't figure out how to show a button had been selected :|
                  */}
                  <Typography>
                    <h1> {time != "" ? format(time, 'h:mm a') : ""} </h1> 
                  </Typography>
                  
                </Grid>
              </Grid>

              <Timeslots
                handleTimeSelect={handleTimeSelect}
                values={values}
                start={timeBoundaries.start}
                end={timeBoundaries.end}
              />

              <Button onClick={prevStep} color="primary">Back</Button>
              <Button 
                onClick={nextStep} 
                color="primary" 
                disabled={time == ''}
              >
                Next
              </Button>

            </div>
          
        );
      case 3:
        return (
            <div>
              {/*Will need to add create meal order feature here */}
              <Typography>
                <h1 values={values}> 
                  Add Meal Order
                </h1>
              </Typography>
              
              
              <Button onClick={prevStep} color="primary">Back</Button>
              <Button onClick={nextStep} color="primary">Next</Button>

            </div>
          
        );
      case 4:
        return (
          <div>
            <form onSubmit={handleOnSubmit}>
            <Review 
              values={values}
            />

            <Button onClick={prevStep} color="primary"> Back </Button>
            </form>
            
          </div>
          
        )
    }
  }
}

export default ReservationForm;