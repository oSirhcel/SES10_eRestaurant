import React, { Component } from 'react';
import ReservationForm from './ViewComponents/ReservationForm.js';
import CustomerViewFrame from './ViewComponents/CustomerViewFrame';

export class ReservationController extends Component {
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
  
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change i.e. number of people and session seletion
  handleChange = input => e => {
    if (input == 'session' && this.state.session != e.target.value) {
      this.setState({ time : ''});
    }
    this.setState({ [input]: e.target.value });
  };

  handleDateSelect = (value) => {
      this.setState({date: value});
  }

  handleTimeSelect = (value) => {
      this.setState({time: value});
  }

  handleOnSubmit = () => {
    alert("Need to actually put reservation in the system lol");
  }

  timeToString = (time) => {
    if (time == '') {
      return('');
    }
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

  render() {
    const { step, date, time, session, numPeople } = this.state;
    
    return (
        <ReservationForm 
            step = {step}
            date = {date}
            time = {time}
            session = {session}
            numPeople = {numPeople}
            nextStep = {this.nextStep}
            prevStep = {this.prevStep}
            handleChange = {this.handleChange}
            handleDateSelect = {this.handleDateSelect}
            handleTimeSelect = {this.handleTimeSelect}
            handleOnSubmit = {this.handleOnSubmit}
            timeToString = {this.timeToString}
        />
    )
  }
}

const MakeReservationStage = () => {
    return (
      <CustomerViewFrame element = {<ReservationController />}/>
    )
}

export default MakeReservationStage;

