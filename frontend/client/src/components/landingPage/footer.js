import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Le Bistro d'Andre
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // background: '#ffcc80',
     marginTop: theme.spacing(24),
    padding: theme.spacing(1, 0),
    maxWidth: 'false',
  },
}));


export default function Footer() {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            >
                <Grid direction="row"> 
                    <Typography style ={{fontSize: 16, fontWeight:600}} align = 'center'>
                        Connect with us
                    </Typography>

                <IconButton aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer"> <InstagramIcon/> </IconButton>
                <IconButton aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer"> <TwitterIcon/> </IconButton>
                <IconButton aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FacebookIcon/> </IconButton>
                </Grid>

            </Grid>
        <Copyright />
        </footer>
    );
}

