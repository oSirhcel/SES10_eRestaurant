import React, { Component } from 'react';
import Timeslots from './Timeslots';
import Button from '@material-ui/core/Button';
import Review from './ReviewOrder';
import FormDate from './FormDate';
import { getDate, format } from 'date-fns';

export class UserForm extends Component {
  state = {
    step: 1,
    session: 'lunch',
    date: new Date(),
    time: 'test',
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

  getDateChange = (value) => {
      this.setState({date: value});
  }

  getTimeChange = (value) => {
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
            getDateChange={this.getDateChange}
            values={values}
            selectSession={this.selectSession}
          />
            </div>
          
        );
      case 2:
        return (
            <div>
                <h1> Pick a Time </h1>
                <Timeslots
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            getTimeChange={this.getTimeChange}
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
                > Add Meal Order
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
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;