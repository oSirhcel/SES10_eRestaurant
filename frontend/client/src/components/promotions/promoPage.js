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

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(0),
    minHeight: "100vh",
    alignContent: "center",
  },
  card: {
    marginTop: 100,
    marginBottom: 20,
    maxWidth: 750,
    alignContent: "center",
  },
  media: {
    height: 250,
    width: 750
  },
}));


export default function PromoPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline>
        <Container maxWidth="lg">
          <Header />
        </Container>
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
                  title="Croque Monsieur"
                  component="img"
                  src='https://secureservercdn.net/198.71.189.253/b6d.5c9.myftpupload.com/wp-content/uploads/2019/10/inside-vegan-croissant-stacked.jpg'
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                  >
                    Buy 1 croissant get 1 free.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                className={classes.media}
                  title="Macaron"
                  component="img"
                  src='https://www.kids-world-travel-guide.com/images/xfrench_food_macarons_shutterstock_62967172-2.jpg.pagespeed.ic.1_Cll_AGWX.jpg'
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                  >
                    15% off meals over $20
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                className={classes.media}
                  title="Crepe"
                  component="img"
                  src='https://www.goway.com/media/cache/70/22/702291eb1a1895e3bc3d124cc5ae4da9.jpg'
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    align="center"
                  >
                    Free crepe with any meal over $35.
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



