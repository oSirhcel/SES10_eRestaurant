import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/LandingPage/header';
import MainFeaturedPost from "./components/LandingPage/feature.js"
import Footer from './components/LandingPage/footer';
import MainFeaturedPost from "./components/LandingPage/feature.js"

const useStyles = makeStyles((theme) => ({ 
  root: {
      marginTop: theme.spacing(0),
      minHeight: '100vh',
      


  }
}));



const mainFeaturedPost = {
title: 'The Perfect Crossaint.',
description:'Experience the signature food of France at its finest.',
imgText: 'crossaint',
buttonText: 'Book with us',
};


const sections = [
{ title: 'LOCATIONS', url: '#' },
{ title: 'MENU', url: '#' },
{ title: 'RESERVE', url: '#' },
{ title: 'ABOUT US', url: '#' },
{ title: 'PROMOTIONS', url: '#' },
{ title: 'MY ACCOUNT', url: '#' },
];

export default function App(){
  const classes = useStyles();
  return <div className={classes.root}>
      <React.Fragment>
  <CssBaseline />
  <Container maxWidth="lg" >
    <Header title="Le Bistrot d'Andre" sections={sections} />
  </Container>
  <main>
    <MainFeaturedPost post={mainFeaturedPost} />
    <MainDescription />
    </main>
    <Container>
      
      <Footer/>
    </Container>
</React.Fragment>
  </div>;
}