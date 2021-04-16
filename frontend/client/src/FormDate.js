import React, { Component } from 'react';
//import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { getDate, format } from 'date-fns';

export class FormDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            session: '',
            selectedDate: new Date(),
        };
      }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleDateChange = e => {
      this.setState({selectedDate : e});
      this.props.handleDateSelect(e);
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
         
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
                autoOk
                orientation="landscape"
                variant="static"
                openTo="date"
                value={this.state.selectedDate}
                onChange={this.handleDateChange}
                disablePast
            />
    </MuiPickersUtilsProvider>
          </Grid>
          <Grid container item xs={12} sm={6} >
            
          <Grid container direction="column" spacing={5}>
            <Grid item>
            
            <TextField
              id="outlined-number"
              label="Number of People"
              type="number"
              onChange={handleChange("numPeople")}
            />
            </Grid>
            <Grid item>
              <FormControl component="fieldset">
                <FormLabel component="legend">Session</FormLabel>
                <RadioGroup aria-label="Session" name="session" onChange={handleChange('session')} defaultValue={values.session}>
                  <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
                  <FormControlLabel value="Dinner" control={<Radio />} label="Dinner" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          
          </Grid> 
                    
        </Grid>      
      
      <br></br>

    <Button
        color="primary"
        variant="contained"
        onClick={this.continue}
    >Next</Button>

      </div>
    );
  }
}

export default FormDate;