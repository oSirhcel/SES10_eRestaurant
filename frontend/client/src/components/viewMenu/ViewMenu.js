import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Tabs, Tab } from "@material-ui/core";
import LunchMenu from "./lunchMenu";
import DinnerMenu from "./dinnerMenu";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function ViewMenu() {
  const classes = useStyles();

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.heroContent}>
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Menu
          </Typography>
        </Container>
      </div>
      <div>
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="primary"
        >
          <Tab label="Lunch" />
          <Tab label="Dinner" />
        </Tabs>
        {selectedTab === 0 && <LunchMenu />}
        {selectedTab === 1 && <DinnerMenu />}
      </div>
    </React.Fragment>
  );
}
