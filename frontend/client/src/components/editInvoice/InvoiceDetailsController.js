import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { format } from 'date-fns';
import InvoiceDetailsForm from './InvoiceDetailsForm';



const InvoiceDetailsController = ({invoiceData}) => {
    const [mealOrder, setMealOrder] = React.useState(invoiceData.data.mealOrder);

    const [currentlyEditing, setEdit] = React.useState(false);
    
    
    // Doesn't actually alert anything excepts objects. Just some dummy code for submitting stuff.
    const handleSubmit = () => {
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
            handleSubmit = {handleSubmit}
            handleCancel = {handleCancel}
        />
    )
}

export default InvoiceDetailsController;