import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import entree from "./menuItems/dinnerItems/entreeDinner";
import main from "./menuItems/dinnerItems/mainDinner";
import dessert from "./menuItems/dinnerItems/dessertDinner";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

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
});

export default function DinnerMenu(props) {
  const classes = useStyles();
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
                {item.price}
              </Typography>
            </CardContent>
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
                {item.price}
              </Typography>
            </CardContent>
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
                {item.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
