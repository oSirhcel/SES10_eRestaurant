import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import { mainListItems } from './ListItems';

import StaticDatePicker from './DatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    width: '750'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function RadioButtonsGroup() {
  const [value, setValue] = React.useState('lunch');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Session</FormLabel>
      <RadioGroup aria-label="Session" name="session" value={value} onChange={handleChange}>
        <FormControlLabel value="lunch" control={<Radio />} label="Lunch" />
        <FormControlLabel value="dunner" control={<Radio />} label="Dinner" />
      </RadioGroup>
    </FormControl>
  );
}

export default function Step1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <StaticDatePicker />
          </Grid>
          <Grid item xs={12} sm container>
          <Grid container direction="column" spacing={5}>
            <Grid item>
            <TextField
              id="outlined-number"
              label="Number of People"
              type="number"
            />
            </Grid>
            <Grid item>
              <RadioButtonsGroup />
            </Grid>
          </Grid>
          </Grid>          
        </Grid>
      </Paper>
    </div>
  );
}
/*
  */