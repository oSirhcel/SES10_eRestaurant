import React from 'react';
import ReservationDetailsForm from './ViewComponents/ReservationDetailsForm';
import CustomerViewFrame from './ViewComponents/CustomerViewFrame';

class ReservationDetailsController extends React.Component {
    render() {
        return (
            <ReservationDetailsForm />
        )
    }
}

const ReservationDetailsStage = () => {
    return (
        <CustomerViewFrame element = {<ReservationDetailsController />}/>
      )
}

export default ReservationDetailsStage;


