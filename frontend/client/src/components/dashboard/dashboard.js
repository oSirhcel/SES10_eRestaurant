import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Redirect } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  appBar: {
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80')`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogsContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%",
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function Dashboard() {
  const classes = useStyles();
  const [render, setRender] = useState(false);
  const [url, setUrl] = useState("");

  const onClickRedirect = (path) => {
    setUrl(path);
    setRender(true);
  }

  if(render){
    return <Redirect to = {url} />
  }

  return (
    <div>
      <AppBar className={classes.appBar} position="static">
      </AppBar>
      <Box className={classes.hero}>
        <Box>Dashboard</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
              <Card className={classes.card} onClick={() => {onClickRedirect("/makeReservation")}}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://images.pexels.com/photos/5490926/pexels-photo-5490926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="waiter"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Reserve a table
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      By reserving a table beforehand, you will be able to enjoy immediate placement and prompt serving.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={() => {onClickRedirect("/viewMenu")}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/332090/pexels-photo-332090.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="menu"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    View Menu
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    From lunch to dinner, experience a plethora of dishes and drinks with the authentic
                    taste of french cuisine.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={() => {onClickRedirect("/promotions")}}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="baby trolly"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                   Coupons and Promotions 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Checkout our amazing deals and promotion that apply to you!
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;