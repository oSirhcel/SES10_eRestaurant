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


export default function AboutUs() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Header />
          <Footer />
        </Container>
      </React.Fragment>
    </div>
  );
}
