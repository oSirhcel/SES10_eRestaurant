import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
        Le Bistro
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // background: '#ffcc80',
     marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
    maxWidth: 'false',
  },
}));


export default function Footer(props) {
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
                    <Typography component="h1" variant="h6">
                        Connect with us
                    </Typography>

                <IconButton aria-label="Instagram"> <InstagramIcon/> </IconButton>
                <IconButton aria-label="Twitter"> <TwitterIcon/> </IconButton>
                <IconButton aria-label="Facebook"> <FacebookIcon/> </IconButton>
                </Grid>

            </Grid>
        <Copyright />
        </footer>
    );
}

