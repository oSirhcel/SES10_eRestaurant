import React from "react";
import { makeStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Header from "../margins/header"
import Footer from "../margins/footer";
import Container from "@material-ui/core/Container";
import { CssBaseline } from "@material-ui/core";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
} from "@material-ui/core";
import promo from "./promoItems"

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "20px",
  },

  root: {
    marginTop: theme.spacing(0),
    minHeight: "100vh",
    alignContent: "center",
  },
  card: {
    marginTop: 50,
    marginBottom: 20,
    maxWidth: 750,
    alignContent: "center",
  },
  media: {
    height: 250,
    width: 600
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));


export default function PromoPage(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline>
        <Container maxWidth="lg">
          <Header />
        </Container>
        <div className={classes.heroContent}>
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Discounts & Promotions
          </Typography>
        </Container>
      </div>

      {promo.map((item) =>(
        <Grid
          container
          spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '10vh' }}
        >
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                className={classes.media}
                  image={item.image}
                  title={item.name}
                />
 
                    <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                {item.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {item.expiry}
              </Typography>
            </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          </Grid>
      ))}
        
        <Container>
          <Footer />
        </Container>
      </CssBaseline>
    </div>
  );
}



