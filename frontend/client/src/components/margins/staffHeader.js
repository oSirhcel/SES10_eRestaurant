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
    marginRight: theme.spacing(1.5),
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
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/edit-menu"
            className={classes.toolbarLink}
          >
          
           EDIT MENU
          </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/edit-promotions"
            className={classes.toolbarLink}
          >
            EDIT PROMOTIONS
            </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/staff-dashboard"
            className={classes.toolbarLink}
          >
           STAFF DASHBOARD 
           </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/view-reservations"
            className={classes.toolbarLink}
          >
           VIEW RESERVATIONS 
           </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/staff-register"
            className={classes.toolbarLink}
          >
<<<<<<< HEAD
           ADD STAFF ACCOUNT
          </Link>
          <Link
=======
           Add Staff Account
           </Button>
          <Button
            component={Link}
>>>>>>> b38c9357ac50a09dd8fe5218aa524980aa83ec14
            color="inherit"
            variant="body2"
            to="/staff-records"
            className={classes.toolbarLink}
          >
<<<<<<< HEAD
           VIEW STAFF ACCOUNTS
          </Link>
=======
           View Staff Accounts
           </Button>
>>>>>>> b38c9357ac50a09dd8fe5218aa524980aa83ec14
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