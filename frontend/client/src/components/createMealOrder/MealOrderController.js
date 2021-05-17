import React from 'react';
import CreateMealOrderStepper from './CreateMealOrderStepper';
import Button from '@material-ui/core/Button';

class MealOrderController extends React.Component {
    state = {
      step: 1,
      data: [],
    }

    handleAdd = (dish) => {
        var data = this.state.data;
        data.push(dish);
        this.setState({data: data});
    }

    handleRemove = (itemName) => {
      var data = this.state.data.filter((item)=>(item.item !== itemName));
      this.setState({data: data});
    }

    handleSubmit = () => {
      this.props.handleSubmitOrder(this.state.data);
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
  
 
    render() {
      const {handleSubmitOrder, session} = this.props;
      return(
        <div>
          <CreateMealOrderStepper
            step = {this.state.step}
            prevStep = {this.prevStep}
            nextStep = {this.nextStep}
            submitOrder = {this.handleSubmit}
            handleAdd = {this.handleAdd}
            rows = {this.state.data}
            handleRemove = {this.handleRemove}
            session = {session}
          />
        </div>
              
      )
    }
  }
  
  
  export default MealOrderController;