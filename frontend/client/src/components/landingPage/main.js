import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/LandingPage/header';
import MainFeaturedPost from "./feature.js"
const useStyles = makeStyles((theme) => ({ 
    root: {
        marginTop: theme.spacing(3),
        minHeight: '150vh',

    }
}));



const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  imgText: 'main image description',
  buttonText: 'Book with us',
};


const sections = [
  { title: 'Locations', url: '#' },
  { title: 'Menu', url: '#' },
  { title: 'Reserve', url: '#' },
  { title: 'About Us', url: '#' },
  { title: 'Promotions', url: '#' },
  { title: 'My Account', url: '#' },
];

export default function App(){
    const classes = useStyles();
    return <div className={classes.root}>
        <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <Header title="Le Bistrot d'Andre" sections={sections} />
    </Container>
    <Container maxWidth="false">
    <main>
      <MainFeaturedPost post={mainFeaturedPost} />
      </main>
  </Container>
  </React.Fragment>
    </div>;
}