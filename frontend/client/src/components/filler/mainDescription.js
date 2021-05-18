import React from "react";
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
    lineHeight: 1.5,
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
          SYDNEY
        </div>
        <div className={classes.slogan} align="center">
          {" "}
          BROADWAY
        </div>
        <div className={classes.description} align="center">
          Broadway Shopping Centre
          <div>
          Shop S999, Level 9, 9 Nine St
            <div />
            Broadway, NSW, 2007
          </div>
        </div>
        <div align="center" className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            aria-label="Find Us"
            href="https://www.google.com/maps/place/Broadway+Sydney/@-33.8842156,151.1925287,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12ae3cc9d8039b:0x749479723971b7eb!8m2!3d-33.8842201!4d151.1947174"
            target="_blank"
            rel="noopener noreferrer"
          >
            Find us
          </Button>
        </div>
      </Grid>
    </Container>
  );
}
