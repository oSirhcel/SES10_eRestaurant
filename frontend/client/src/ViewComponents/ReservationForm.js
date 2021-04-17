import React, { Component } from 'react';
import Timeslots from './Timeslots';
import Button from '@material-ui/core/Button';
import Review from './ReviewOrder';
import FormDate from './FormDate';
import Grid from '@material-ui/core/Grid';

export class ReservationForm extends Component {
  render() {
    const { step } = this.props;
    const { date, session, time, numPeople } = this.props;
    const { nextStep, prevStep, handleChange, handleDateSelect, handleTimeSelect, timeToString } = this.props;
    const values = { date, session, time, numPeople };

    switch (step) {
      case 1:
        return (
            <div>

              <h1> Book a Table </h1>

              <FormDate
                handleChange={handleChange}
                handleDateSelect={handleDateSelect}
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
                  <h1> Pick a Time </h1>
                </Grid>
                <Grid item xs={12} sm={6} align="center">
                  <h1> {timeToString(time)} </h1>
                </Grid>
              </Grid>

              <Timeslots
                handleTimeSelect={handleTimeSelect}
                values={values}
                session={session}
              />

              <Button onClick={prevStep} color="primary">Back</Button>
              <Button onClick={nextStep} color="primary" 
              disabled={time == ''}>
              Next</Button>

            </div>
          
        );
      case 3:
        return (
            <div>

              <h1
                values={values}
              > 
                Add Meal Order
              </h1>

              <Button onClick={prevStep} color="primary">Back</Button>
              <Button onClick={nextStep} color="primary">Next</Button>

            </div>
          
        );
      case 4:
        return (
          <div>

            <Review 
              values={values}
            />

            <Button onClick={prevStep} color="primary"> Back </Button>

          </div>
          
        )
    }
  }
}

export default ReservationForm;