import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import DateFnsUtils from '@date-io/date-fns'; 
import Box from '@material-ui/core/Box';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography';

export class FormDate extends Component {

  render() {
    const { values, handleChange, handleDateSelect, selectedDate } = this.props;
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
                onChange={handleDateSelect}
                value={selectedDate}
                disablePast
            />
            </MuiPickersUtilsProvider>
          </Grid>
          
          <Grid item xs={12} sm={6} display="block" >
          <Paper width = {100}>
            <Box m={2} p={2}>
              <TextField
                id="outlined-number"
                label="Number of People"
                type="number"
                onChange={handleChange("numPeople")}
              />
              <p> <Typography color="secondary" variant="body2">Maximum number of People is 20</Typography> </p>
              
            </Box>      

            <Box m={2} p={2}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Session</FormLabel>
                <RadioGroup aria-label="Session" name="session" onChange={handleChange('session')} defaultValue={values.session}>
                  <FormControlLabel value="Lunch" control={<Radio />} label="Lunch" />
                  <FormControlLabel value="Dinner" control={<Radio />} label="Dinner" />
                </RadioGroup>
              </FormControl>
            </Box>
              
          </Paper>       
          </Grid>  

        </Grid>

        <br/>
       
      </div>
    );
  }
}

export default FormDate;