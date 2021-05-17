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
import AddPhotoIcon from "@material-ui/icons/AddPhotoAlternate";
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  imgPreview: {
    width: 200,
    height: 200,
  },
}));



//The add item dialog.
const AddItemDialog = ({
  handleSubmit, handleImageSelection, deleteButton, setItem, 
  setDescription, setExpiry, error, imgPreview, setImgPreview}) => { 
  const classes = useStyles();
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

            <DialogTitle id="form-dialog-title">Add New Promotion</DialogTitle>

            <DialogContent>

              <DialogContentText>
                Add a new promotion.
              </DialogContentText>


        {error && <p className="errorMsg">File not supported</p>}
        <div
          className={classes.imgPreview}
          style={{
            background: imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#ffffff"
          }
        }
        >
          {!imgPreview && (
            <>
              <InputLabel htmlFor="fileUpload" className="customFileUpload">
                <AddPhotoIcon/>               
              </InputLabel>
              <input type="file" id="fileUpload" style={{display:"none"}} onChange={handleImageSelection} />
              <Typography>(jpg, jpeg or png)</Typography>
            </>
          )}
          </div>

        
        {imgPreview && (
          <Button onClick={() => setImgPreview(null)}>Remove image</Button>
        )}

              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Promotion Description"
                fullWidth
                onChange={(event) => setDescription(event.target.value)}
              />
              <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                  onChange = {(event) => setExpiry(event.target.value)}
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
