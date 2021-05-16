import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Tabs, Tab } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LunchMenu from "./lunchMenu";
import DinnerMenu from "./dinnerMenu";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  button: {
    padding: "20px",
  },
}));

const CreateMealOrder = ({nextStep, handleAdd}) => {
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
            Create Meal Order
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
        {selectedTab === 0 && <LunchMenu handleAdd = {handleAdd}/>}
        {selectedTab === 1 && <DinnerMenu handleAdd = {handleAdd}/>}
      </div>
      <div className={classes.button}>
        <Button
          className={classes.button}
          size="large"
          fullWidth
          variant="contained"
          color="primary"
          onClick={nextStep}
        >
          Create Meal Order
        </Button>
      </div>
    </React.Fragment>
  );
}
export default CreateMealOrder;