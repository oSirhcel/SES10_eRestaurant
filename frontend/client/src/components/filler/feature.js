import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { LinkOffOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(0),
    marginTop: theme.spacing(3),
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "centre",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.1)",
  },
  mainFeaturedPostContent: {
    color: "inherit",
    position: "relative",
    padding: theme.spacing(1),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(30),
      paddingRight: 0,
    },
  },
  mainFont: {
    fontFamily: "Serif",
    fontWeight: "1000",
    color: "#8393F7"
  }
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Paper
      className={classes.mainFeaturedPost}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/OnionSoup.jpg"
        })`,
      }}
    >
      {
        <img
          style={{ display: "none" }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom
              className={classes.mainFont}
            >
              {post.title}
            </Typography>
              {post.buttonText}
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
