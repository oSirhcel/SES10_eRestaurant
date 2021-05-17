import React from "react";
import PropTypes from "prop-types";
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
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/locations"
            className={classes.toolbarLink}
          >
            LOCATIONS
          </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/menu"
            className={classes.toolbarLink}
          >
            MENU
          </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/reserve"
            className={classes.toolbarLink}
          >
            RESERVE
          </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/about-us"
            className={classes.toolbarLink}
          >
            ABOUT US
          </Button>
          <Button
            component={Link}
            color="inherit"
            variant="body2"
            to="/promotions"
            className={classes.toolbarLink}
          >
            PROMOTIONS
          </Button>
          <Button
            component={Link}
            variant="contained"
            size="small"
            color="primary"
            to="/login"
          >
            login
          </Button>
        </Toolbar>
      </div>
    </React.Fragment>
  );
}
