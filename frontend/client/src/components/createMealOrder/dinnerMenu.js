import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import entree from "../viewMenu/menuItems/dinnerItems/entreeDinner.js";
import main from "../viewMenu/menuItems/dinnerItems/mainDinner.js";
import dessert from "../viewMenu/menuItems/dinnerItems/dessertDinner.js";
import AddToOrder from "./addToOrder";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "20px",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  status: {
    paddingLeft: "20px",
  }
});

const DinnerMenu = ({handleAdd, order, handleRemove}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const ordered = (itemName) => {
    for (var i = 0; i < order.length; i++) {
      if (order[i].item === itemName) {
        return true;
      }
    }
    return false;
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">Entree</Typography>
      </Grid>
      {entree.map((item) => (
        <Grid item key={item.name} xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
              <Typography variant="h6" component="p">
                ${item.price.toFixed(2)}
              </Typography>
            </CardContent>
            <CardActions>
              <AddToOrder 
                name = {item.name}
                price = {item.price}
                handleAdd = {handleAdd}
              />

              {ordered(item.name) 
                ? (
                  <Button className = {classes.status} onClick = {() => handleRemove(item.name)}>
                    Remove from Order
                  </Button>
                ) 
                : ''
              }

            </CardActions>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">Main</Typography>
      </Grid>
      {main.map((item) => (
        <Grid item key={item.name} xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
              <Typography variant="h6" component="p">
                ${item.price.toFixed(2)}
              </Typography>
            </CardContent>
            <CardActions>
              <AddToOrder 
                name = {item.name}
                price = {item.price}
                handleAdd = {handleAdd}
              />
              {ordered(item.name) 
                ? (
                  <Button className = {classes.status} onClick = {() => handleRemove(item.name)}>
                    Remove from Order
                  </Button>
                ) 
                : ''
              }

            </CardActions>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">Dessert</Typography>
      </Grid>
      {dessert.map((item) => (
        <Grid item key={item.name} xs={12} sm={6} md={4}>
          <Card className={classes.root}>
            <CardMedia
              className={classes.media}
              image={item.image}
              title={item.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.description}
              </Typography>
              <Typography variant="h6" component="p">
                ${item.price.toFixed(2)}
              </Typography>
            </CardContent>
            <CardActions>
              <AddToOrder 
                name = {item.name}
                price = {item.price}
                handleAdd = {handleAdd}
              />
              {ordered(item.name) 
                ? (
                  <Button className = {classes.status} onClick = {() => handleRemove(item.name)}>
                    Remove from Order
                  </Button>
                ) 
                : ''
              }
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default DinnerMenu;