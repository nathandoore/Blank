import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Image from '../../assets/signupImage.png';
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(2),
  },
  form: {
    '& > *': {
        margin: theme.spacing(1),
        width: '50ch',
      },
  }
}));

export default function HomeGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1 style={{textAlign: 'center'}}>
              Get started with my CRM
          </h1>
          <p style={{textAlign: 'center'}}>
               Sign up below if I havn't given you an account already
          </p>
        </Grid>
        <Grid item xs={6}>
            <img src={Image} alt="CRM" width="80%"/>
        </Grid>
        <Grid item xs={6}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField id="standard-basic" label="First Name" variant="outlined"/>
            <TextField id="standard-basic" label="Last Name" variant="outlined"/>
            <TextField id="standard-basic" type="email" label="Email Address" variant="outlined"/>
            <TextField id="outlined-password-input" type="password" label="Password" variant="outlined"/>
            <TextField id="outlined-password-input" type="password" autoComplete={false} label="Confirm Password" variant="outlined"/>
            <ReCAPTCHA
                sitekey="Your client site key"
            />
            <Button variant="contained" color="primary" style={{width: '30%'}}>
                Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}