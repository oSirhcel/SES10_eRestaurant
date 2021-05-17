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
            to="/edit-menu"
            className={classes.toolbarLink}
          >
          
           EDIT MENU
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/edit-promotions"
            className={classes.toolbarLink}
          >
            EDIT PROMOTIONS
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/staff-dashboard"
            className={classes.toolbarLink}
          >
           STAFF DASHBOARD 
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/view-reservations"
            className={classes.toolbarLink}
          >
           VIEW RESERVATIONS 
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/staff-register"
            className={classes.toolbarLink}
          >
           Add Staff Account
          </Link>
          <Link
            color="inherit"
            variant="body2"
            to="/staff-records"
            className={classes.toolbarLink}
          >
           View Staff Accounts
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