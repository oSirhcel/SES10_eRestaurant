import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Header from "../margins/header";
import Footer from "../margins/footer";
import MainFeaturedPost from "./feature";
import MainDescription from "./mainDescription";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),
    minHeight: "100vh",
  },
}));

const mainFeaturedPost = {
  title: "The Perfect Croissant.",
  description: "Experience the signature food of France at its finest.",
  imgText: "croissant",
  buttonText: "Join us",
};

export default function LandingPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
        </Container>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <MainDescription />
        </main>
        <Container>
          <Footer />
        </Container>
      </React.Fragment>
    </div>
  );
}
