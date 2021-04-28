import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Header from "../header";
import Footer from "../footer";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import { GridList } from "@material-ui/core";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),
    minHeight: "100vh",
    alignContent: "center",
  },
  card: {
    marginTop: 100,
    marginBottom: 50,
    maxWidth: 345,
    alignContent: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

const sections = [
  { title: "LOCATIONS", url: "#" },
  { title: "MENU", url: "#" },
  { title: "RESERVE", url: "#" },
  { title: "ABOUT US", url: "#" },
  { title: "PROMOTIONS", url: "#" },
  { title: "MY ACCOUNT", url: "#" },
];

export default function PromoPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline>
        <Container maxWidth="lg">
          <Header title="Le Bistrot d'Andre" sections={sections} />
        </Container>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid items item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title="Croque Monsieur"
                  image="frontend\client\src\img\promoMonsieur.jpg"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid items item xs={12} sm={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title="Croque Monsieur"
                  image="frontend\client\src\img\promoMonsieur.jpg"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Container>
          <Footer />
        </Container>
      </CssBaseline>
    </div>
  );
}
