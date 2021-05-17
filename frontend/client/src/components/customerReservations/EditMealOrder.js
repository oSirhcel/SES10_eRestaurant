import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReservationDetailsForm from './ReservationDetailsForm';
import ReviewTable from '../create-meal-order/ReviewTable';
import MealOrderController from '../create-meal-order/MealOrderController';
import EditIcon from '@material-ui/icons/Edit';
import { format, isBefore } from 'date-fns';

const EditMealOrder = ({mealOrder, session, selectedDate}) => {
    const [currentlyEditing, setEdit] = React.useState(false);
    const handleEdit = () => {
        setEdit(true);
    }
    const handleSubmit = (data) => {
        setEdit(false);
        console.log(data);
    }

    return (
        <div>
            <Button onClick = {handleEdit} disabled={isBefore(new Date(format(selectedDate, 'yyyy-MM-dd') ), new Date())}>
                <EditIcon />
            </Button>
            {
                currentlyEditing
                ? (
                    <MealOrderController 
                    handleSubmitOrder = {handleSubmit}
                    session = {session}
                    currentOrder = {mealOrder}
                    />
                )
                : (
                    <ReviewTable rows = {mealOrder} title = "Meal Order"/>
                )
            }

            
            
        </div>
    )
}

export default EditMealOrder;