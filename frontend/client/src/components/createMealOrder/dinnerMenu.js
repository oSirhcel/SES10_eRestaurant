import React from "react";
import MenuCard from "./card";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "20px",
  },
});

const items = [1, 2, 3, 4];

export default function DinnerMenu() {
  const classes = useStyles();
  return (
    <Grid container spacing={4} className={classes.gridContainer}>
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">Entree</Typography>
      </Grid>
      {items.map((item) => (
        <Grid item key={item} xs={12} sm={6} md={3}>
          <MenuCard />
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">Main</Typography>
      </Grid>
      {items.map((item) => (
        <Grid item key={item} xs={12} sm={6} md={3}>
          <MenuCard />
        </Grid>
      ))}
      <Grid item xs={12} sm={12} md={12}>
        <Typography variant="h4">Dessert</Typography>
      </Grid>
      {items.map((item) => (
        <Grid item key={item} xs={12} sm={6} md={3}>
          <MenuCard />
        </Grid>
      ))}
    </Grid>
  );
}
