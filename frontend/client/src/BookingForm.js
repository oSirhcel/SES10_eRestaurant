import React, { Component } from 'react';
import Timeslots from './Timeslots';
import Button from '@material-ui/core/Button';
import Review from './ReviewOrder';
import FormDate from './FormDate';
import { getDate, format } from 'date-fns';
import Grid from '@material-ui/core/Grid';

export class UserForm extends Component {
  state = {
    step: 1,
    session: 'Lunch',
    date: new Date(),
    time: '',
    numPeople: 0,
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  selectSession = (choice) => {
      this.setState({session: choice});
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleDateSelect = (value) => {
      this.setState({date: value});
  }

  handleTimeSelect = (value) => {
      this.setState({time: value});
  }

  render() {
    const { step } = this.state;
    const { date, session, time, numPeople } = this.state;
    const values = { date, session, time, numPeople };

    switch (step) {
      case 1:
        return (
            <div>
              <h1> Book a Table </h1>
              <FormDate
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                handleDateSelect={this.handleDateSelect}
                values={values}
                selectSession={this.selectSession}
              />
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
                <h1> {this.state.time} </h1>
              </Grid>
              </Grid>
              <Timeslots
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                handleTimeSelect={this.handleTimeSelect}
                values={values}
                session={this.state.session}
              />
            </div>
          
        );
      case 3:
        return (
            <div>
              <h1
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
              > 
                Add Meal Order
              </h1>
              <Button onClick={this.prevStep}>Back</Button>
              <Button onClick={this.nextStep}>Next</Button>
            </div>
          
        );
      case 4:
        return <Review 
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}/>;
    }
  }
}

export default UserForm;