import React from 'react';
import ReservationDetailsForm from '../components/customerReservations/ReservationDetailsForm';
import CustomerViewFrame from '../components/viewFrames/CustomerViewFrame';

class ReservationDetailsController extends React.Component {
    state = {
        selectedReservation: '',
    }
    render() {
        return (
            <ReservationDetailsForm
                selectedReservaiton = {this.state.selectedReservation} 
            />
        )
    }
}

const ReservationDetailsStage = () => {
    return (
        <CustomerViewFrame element = {<ReservationDetailsController />}/>
      )
}

export default ReservationDetailsStage;


