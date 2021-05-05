import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 750,
    fontSize: 18,
    color: "#088bdc",
    wrap: "noWrap",
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(0),
  },

  slogan: {
    fontSize: 50,
    fontFamily: "Serif",
  },

  description: {
    fontSize: 20,
    lineHeight: 1,
    marginTop: theme.spacing(4),
  },

  link: {
    fontWeight: 700,
    marginTop: theme.spacing(4),
    fontSize: 20,
    padding: theme.spacing(1),
  },
}));

export default function MainDescription() {
  const classes = useStyles();

  return (
    <Container>
      <Grid>
        <div align="Center" className={classes.title}>
          LE BISTROT D'ANDRE
        </div>
        <div className={classes.slogan} align="center">
          {" "}
          The World's Greatest Cuisine.
        </div>

        <div className={classes.description} align="center">
          Often described by world renowed chefs across France as the world's
          <div>
            greatest cuisine, our restaurant guarantees that every bite feels
            <div />
            like traversing the lively streets of Paris.
          </div>
        </div>
        <div align="center" className={classes.link}>
          <Button
            component={Link}
            to="/locations"
            variant="contained"
            color="primary"
          >
            Find your closest location.
          </Button>
        </div>
      </Grid>
    </Container>
  );
}
