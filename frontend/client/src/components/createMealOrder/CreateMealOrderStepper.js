import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CreateMealOrder from './createMealOrder';
import ReviewTable from './ReviewTable';


/*Shows the user's meal order in the datagrid in first step and 
then details of the selected reservaiton in the second step.*/

export class CreateMealOrderStepper extends Component {
  render() {
    //const { step, columns, rows, reservationData } = this.props;
    //const { prevStep, } = this.props;
    //const { handleRowSelected, handleDelete } = this.props;
    const { step } = this.props;
    const { prevStep, nextStep, handleAdd, handleRemove, rows, submitOrder, session } = this.props;
    console.log(rows);

    switch (step) {
      case 1:
        return (
            <CreateMealOrder 
              nextStep = {nextStep}
              handleAdd = {handleAdd}
              handleRemove = {handleRemove}
              order = {rows}
              session = {session}
            />         
        );
      case 2:
        return (
            <div>
              {
                rows != []
                  ? (
                    <div>
                      <ReviewTable rows={rows} title = "Review Meal Order"/>
                    </div>
                  )
                  : (
                    <h1> No items selected</h1>
                  )
              }
              <Button onClick={prevStep}>Back</Button>
              <Button onClick = {() => submitOrder(rows)}>
                Submit
              </Button>
            </div>
          
        )
    }
  }
}

export default CreateMealOrderStepper;