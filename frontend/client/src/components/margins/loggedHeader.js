import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: `2px solid ${theme.palette.divider}`,
  },
  toolbar: {
    backgroundColor: "primary",
  },
  toolbarTitle: {
    color: "#088bdc",
    fontWeight: 750,
    flex: 1,
    fontfamily: "Serif",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
    overflowX: "auto",
    marginRight: theme.spacing(2.5),
    fontWeight: 700,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="Left"
            noWrap
            className={classes.toolbarTitle}
          >
            Bistrot d'Andre
          </Typography>
          <Typography>
          <Link
            color="inherit"
            variant="body2"
            to="/menu"
            className={classes.toolbarLink}
          >
          
            MENU
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/promotions"
            className={classes.toolbarLink}
          >
            PROMOTIONS
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/dashboard"
            className={classes.toolbarLink}
          >
           DASHBOARD 
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/makeReservation"
            className={classes.toolbarLink}
          >
           RESERVE
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/my-reservations"
            className={classes.toolbarLink}
          >
           MY RESERVATIONS 
          </Link>
          <Button
            component={Link}
            variant="contained"
            size="small"
            color="primary"
            to="/"
          >
            logout
          </Button>
          </Typography>
        </Toolbar>
      </div>
    </React.Fragment>
  );
}
