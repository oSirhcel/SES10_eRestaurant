import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from '@material-ui/core/TextField';

const AddToOrder = ({name, price, handleAdd}) => {
  const [open, setOpen] = React.useState(false);
  const [qty, setQty] = React.useState(0);
  const data = {item: name, qty: qty, unit: price, price: qty*price};
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleAdd(data);
    handleClose();
  }

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        Add to Meal Order
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">
          {"Please select quantity:"}
        </DialogTitle>
        <DialogContent align="center">
          <TextField
            label="Quantity"
            id="quantity"
            type="number"
            onChange = {(e)=>setQty(parseInt(e.target.value))}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit} fullWidth variant="outlined" autoFocus>
            Add to Order
          </Button>
          <Button onClick={handleClose} fullWidth variant="outlined" autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddToOrder;
