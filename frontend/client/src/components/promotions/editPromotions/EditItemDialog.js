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
import EditIcon from '@material-ui/icons/Edit';

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



//The edit item dialog.
const EditItemDialog = ({
  handleSubmit, handleImageSelection, deleteButton, setItem,
  item, description, price, type, img, imgPreview, defaultImg, disable,
  setDescription, setPrice, setType, error, setImgPreview}) => { 
  const classes = useStyles();
  const [defaultImage, setDefaultImage] = React.useState(defaultImg);
  const [defaultStage, setDefaultStage] = React.useState(1);
  const [open, setOpen] = React.useState(false);
    
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setImgPreview(null);
    handleClose();
  }

  const removeImg = () => {
    setDefaultStage(0);
    setImgPreview(null);
  }

/*style={{
            background: defaultStage == 1
            ? `url("${defaultImg}") no-repeat center/cover`
            : (
              imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#ffffff"
            )
          } */
  console.log("default stage:");
  console.log(defaultStage);

  return (
    <div>
        
      <Button color="primary" onClick={handleClickOpen} disabled = {disable}>
        <EditIcon />
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <form onSubmit={handleSubmit} autocomplete="off">

            <DialogTitle id="form-dialog-title">Edit Menu Item</DialogTitle>

            <DialogContent>

              <DialogContentText>
                Edit Menu Item
              </DialogContentText>


        {error && <p className="errorMsg">File not supported</p>}
        <div
          className={classes.imgPreview}
          style={{
            background: defaultStage == 1
            ? `url("${defaultImg}") no-repeat center/cover`
            : (
              imgPreview
              ? `url("${imgPreview}") no-repeat center/cover`
              : "#ffffff"
            )
          }
        }
        >
          {(!imgPreview && defaultStage != 1) && (
            <>
              <InputLabel htmlFor="fileUpload" className="customFileUpload">
                <AddPhotoIcon/>               
              </InputLabel>
              <input type="file" id="fileUpload" style={{display:"none"}} onChange={handleImageSelection} />
              <Typography>(jpg, jpeg or png)</Typography>
            </>
          )}
          </div>

        
        {(imgPreview || defaultStage == 1) && (
          <Button onClick={removeImg}>Remove image</Button>
        )}

              <TextField
                autoFocus
                margin="dense"
                id="item"
                label="Item Name"
                fullWidth
                onChange={(event) => setItem(event.target.value)}
                defaultValue={item}
              />
              <TextField
                margin="dense"
                id="description"
                label="Description"
                defaultValue = {description}
                fullWidth
                onChange = {(event) => setDescription(event.target.value)}
              />
              <TextField
                label="Price"
                id="price"
                type="number"
                defaultValue = {price}
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
              <Button onClick={handleCancel} color="primary">
                Cancel
              </Button>
              <Button onClick={handleClose} color="primary" type="submit">
                Save
              </Button>
            </DialogActions>

        </form>
      </Dialog>
      {deleteButton}
    </div>
  );
}

export default EditItemDialog;
