import React, { Component } from 'react';
import ReservationForm from '../components/makeReservation/ReservationForm';
import CustomerViewFrame from '../components/viewFrames/CustomerViewFrame';

export class ReservationController extends Component {
  state = {
    step: 1,
    session: 'Lunch',
    date: new Date(),
    time: '',
    numPeople: 0,
  };

  lunchTimes = {
    start: new Date (0, 0, 0, 11),
    end: new Date (0, 0, 0, 14, 30),
  }
  dinnerTimes = {
    start: new Date (0, 0, 0, 17),
    end: new Date (0, 0, 0, 21, 30),
  }

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
    } else {
      this.setState({ [input]: e.target.value });
    }
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

  render() {
    const { step, date, time, session, numPeople, lunchStart, lunchEnd, dinnerStart, dinnerEnd } = this.state;
    const lunchTimes = this.lunchTimes;
    const dinnerTimes = this.dinnerTimes;
    

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
            timeBoundaries = {session == "Lunch" ? lunchTimes : dinnerTimes}
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

