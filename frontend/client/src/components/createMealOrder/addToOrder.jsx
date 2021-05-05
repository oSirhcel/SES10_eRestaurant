import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Counter from "./counter";
import Grid from "@material-ui/core/Grid";

export default function AddToOrder() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        Add to Meal Order
      </Button>
      <Dialog fullWidth open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Salade De Chevre"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please select quantity
          </DialogContentText>
          <Counter />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} fullWidth variant="outlined" autoFocus>
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
