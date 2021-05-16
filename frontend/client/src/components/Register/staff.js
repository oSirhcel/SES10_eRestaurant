import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import { PersonAdd } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, Redirect } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//Imports for the functionality
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
//Imports for margins
import Header from "../margins/header";
import Footer from "../margins/footer";


const RegisterStaff = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    role: "",
    email: "",
    phone: "",
    password: "",
    password2: "",
  });

  const {
    firstname,
    lastname,
    role,
    email,
    phone,
    password,
    password2,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ firstname, lastname, role, email, phone, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const paper = {
    marginTop: 100,
    marginBottom: 320,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const avatar = {
    backgroundColor: "#F85050",
  };
  const form = {
    width: "100%",
    marginTop: 20,
  };
  const submit = {
    marginTop: 10,
  };

  return (
    <div>
      <Container maxWidth="lg">
        <Header/>
      </Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div style={paper}>
          <Avatar style={avatar}>
            <PersonAdd />
          </Avatar>
          <Typography component="h1" variant="h5">
            Staff Registration
          </Typography>
          <form noValidate onSubmit={onSubmit} style={form}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  autoFocus
                  value={firstname}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="role"
                  label="Staff Role"
                  name="role"
                  value={role}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="phone"
                  type="number"
                  label="Mobile Number"
                  name="phone"
                  autoComplete="phone"
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password1"
                  value={password}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password2"
                  label="Confirm Password"
                  id="password2"
                  type="password"
                  value={password2}
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={13}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end"></Grid>
          </form>
        </div>
        <Box mt={5}></Box>
      </Container>
      <Container>
        <Footer />
      </Container>
    </div>
  );
};

RegisterStaff.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerStaff: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(RegisterStaff);
