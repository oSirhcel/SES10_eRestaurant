import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import InvoiceDetailsForm from './InvoiceDetailsForm';

//Dummy Data
import { mealOrder1, mealOrder2, mealOrder3, rows } from './TestData';

const InvoiceDetailsController = ({invoiceData}) => {
    const [mealOrder, setMealOrder] = React.useState(mealOrder1);
    const reservation = rows[0];
    const [currentlyEditing, setEdit] = React.useState(false);
    const [adjustedTotal, setAdjustedTotal] = React.useState(reservation.amount);
    
    // Doesn't actually alert anything excepts objects. Just some dummy code for submitting stuff.
    const handleSubmit = (e) => {
        e.preventDefault();
        reservation.adjustedTotal = adjustedTotal;
        console.log({reservation, mealOrder})
    }

    //Resets all the states basically.
    const handleCancel = () => {
    }

    //Returns the view
    return (
        <InvoiceDetailsForm 
            currentlyEditing = {currentlyEditing}
            setEdit = {setEdit}
            invoiceData = {invoiceData}
            reservation = {reservation}
            mealOrder = {mealOrder}
            handleSubmit = {handleSubmit}
            handleCancel = {handleCancel}
            setAdjustedTotal = {setAdjustedTotal}
            adjustedTotal = {adjustedTotal}
        />
    )
}

export default InvoiceDetailsController;