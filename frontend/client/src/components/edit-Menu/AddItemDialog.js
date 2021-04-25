import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


// The dropdown selection for entree, main and dessert.
const ItemType = ({type, setType}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
        
      <FormControl className={classes.formControl}>
        <InputLabel> Type</InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value="Entree">Entree</MenuItem>
          <MenuItem value="Main">Main</MenuItem>
          <MenuItem value="Dessert">Dessert</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

//The add item dialog.
const AddItemDialog = ({handleSubmit, deleteButton, setItem, setDescription, setPrice, setType, type}) => { 
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
        
      <Button color="primary" onClick={handleClickOpen}>
        <AddIcon />
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <form onSubmit={handleSubmit}>

            <DialogTitle id="form-dialog-title">Add New Item</DialogTitle>

            <DialogContent>

              <DialogContentText>
                Add New Item to the menu.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="item"
                label="Item Name"
                fullWidth
                onChange={(event) => setItem(event.target.value)}
              />
              <TextField
                margin="dense"
                id="description"
                label="Description"
                fullWidth
                onChange = {(event) => setDescription(event.target.value)}
              />
              <TextField
                label="Price"
                id="price"
                type="number"
                inputProps={{ 
                  step: "0.01",                      
                }}
                InputProps={{ 
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                  onChange = {(event) => setPrice(parseFloat(event.target.value))}
              />         
          
              <ItemType
                type = {type}
                setType = {setType}
              />

            </DialogContent>


            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary" type="submit">
                Add
              </Button>
            </DialogActions>

        </form>
      </Dialog>
      {deleteButton}
    </div>
  );
}

export default AddItemDialog;
