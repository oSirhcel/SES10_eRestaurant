import React, { Component } from 'react';
import ReservationForm from './ReservationForm';
import CustomerViewFrame from '../viewFrames/CustomerViewFrame';
import { format } from 'date-fns';
/*import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost, addReservation } from '../../actions/reservation';*/

export class ReservationController extends Component {
  state = {
    step: 1, //To move between steps
    session: 'Lunch', //Only required for showing the eligible times

    /*These states will probably be stored as values in the database.
    Although, might be good idea to combine date and time (see handleSubmit)
    */
    date: new Date(),
    time: '',
    numPeople: 0,
  };

  // Lunch: every 15 minutes between 11:30AM and 2:30PM (can change this of course)
  lunchTimes = {
    start: new Date (0, 0, 0, 11),
    end: new Date (0, 0, 0, 14, 30),
  }

  // Dinner: every 15 minutes between 5:00PM and 9:30PM (can change this of course)
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

  //Event handler for session selection (for some reason handleChange didn't apply to it)
  handleSession = (e) => {
    this.setState({ session: e.target.value});
  }

  //Event handler for date selection
  handleDateSelect = (value) => {
    this.setState({date: value});
  }

  //Event handler for timeselection
  handleTimeSelect = (value) => {
    this.setState({time: value});
  }

  //Dummy code for submit event handler. Might need a submitted dialog or page.
  handleOnSubmit = (e) => {
    e.preventDefault();
    const dateTime = new Date(   
      //Thinking it might be easier to store the date and time together in the database. 
      format(this.state.date, 'y'), 
      format(this.state.date, 'M')-1, 
      format(this.state.date, 'd'), 
      format(this.state.time, 'H'), 
      format(this.state.time, 'm')
      );

      console.log({dateTime: dateTime, numPeople: this.state.numPeople})
     // addReservation({dateTime: dateTime, numPeople: this.state.numPeople});
  }

  render() {
    const { step, date, time, session, numPeople, } = this.state;
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
        handleSession = {this.handleSession}
        timeBoundaries = {session == "Lunch" ? lunchTimes : dinnerTimes}
      />
    )
  }
}


//Uses temporary view frame. Can get rid of this later.
/*const MakeReservationStage = () => {
    return (
      <CustomerViewFrame element = {<ReservationController />}/>
    )
}*/

export default ReservationController;

