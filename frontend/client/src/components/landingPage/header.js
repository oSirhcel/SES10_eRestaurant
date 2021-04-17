import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, MuiThemeProvider } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({
  root: {

  },
  toolbar: {
    backgroundColor: 'primary',
  },
  toolbarTitle: {
    color: '#088bdc',
    fontWeight: 750,
    flex: 1,
    fontfamily: 'Serif',
  },
  toolbarSecondary: {
    justifyContent: 'flex-end',
    
  },
  toolbarLink: {  
    padding: theme.spacing(1),
    flexShrink: 0,
    overflowX: 'auto',
    marginRight: theme.spacing(2.5),
  },
}));


export default function Header(props) {
  const classes = useStyles();
  const { sections, title } = props;

  return (
    <React.Fragment>
      <div className ={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h2"
          variant="h5"  
          color="inherit"
          align="Left"
          noWrap
          className={classes.toolbarTitle}
        >
          {title}
        </Typography>
        {sections.map((section) => (
          <Link
            color="inherit"
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
        <Button variant="contained" size="small" color="primary" className ={classes.toolbarSecondary}>
          Sign up
        </Button>
      </Toolbar>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};