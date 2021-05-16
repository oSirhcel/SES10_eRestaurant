import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AddToOrder from "./addToOrder";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MenuCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://images.unsplash.com/photo-1505576733088-f8a0f2f4b8a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
        title="Pear Salad"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          SALADE DE CHÈVRE
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Goat Cheese Salad with Pears, Walnuts and Seeded Mustard Dressing
        </Typography>
        <Typography variant="h6" component="p">
          $22
        </Typography>
      </CardContent>
      <CardActions>
        <AddToOrder />
      </CardActions>
    </Card>
  );
}
