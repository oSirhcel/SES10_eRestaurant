import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './components/landingPage/header';


const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Locations', url: '#' },
  { title: 'Menu', url: '#' },
  { title: 'Reserve', url: '#' },
  { title: 'About Us', url: '#' },
  { title: 'Promotions', url: '#' },
  { title: 'My Account', url: '#' },
];

export default function App() {
  return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header title="Le Bistrot d'Andre" sections={sections} />
    </Container>
  </React.Fragment>
);
}

