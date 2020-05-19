import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import axios from 'axios';

// https://images.unsplash.com/photo-1561494270-744b7f2ff037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
// https://images.unsplash.com/photo-1561284081-ebf6c977bbde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1446&q=80
// https://images.unsplash.com/photo-1541544181051-e46607bc22a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80

const theme = createMuiTheme();

// type="submit"
const styles = {
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1541544181051-e46607bc22a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  lateralGrid: {
    backgroundColor: blueGrey[50],
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.text.primary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};

/*
checkRegisterUser(username) {

    return new Promise(function(resolve, reject) {

      var existent_user = false;

      let url = "http://" + window.location.hostname + ":5000/user/getClientByUsername/"+username;
  
      const data = axios.get(url)
      .then(res => {
          console.log("RES: ", res);

          if (res.data.success) {

            if (res.data.client.length > 0) {
              existent_user = true;
            }

            resolve(existent_user);
          }
          else {
            reject(res.data.success);
          }
        })
        .catch(err => {
          reject(err)
      });

    });
  }
*/

class signUp extends Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: 'Mariaa',
      lastName: 'Pereza',
      phone: '3002347645s',
      email: 'maripositarockeraa@gmail.com',
      username: 'mariapereza',
      password: 'mariapereza',
      userType: 2,
    }
  }

  sendUser() {
    
    /* TOCA VALIDAR EN BACKEND QUE NO EXISTA */

    var filled_fields = true;

    for (var attribute in this.state) {

      if (this.state[attribute] === '' && this.state[attribute] !== 2) {
        filled_fields = false;
      }
    }

    if (filled_fields) {

      let url = "http://" + window.location.hostname + ":5000/user/createUser";

      const dataPost = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
        userType: 2,
      }

      axios.post(url, dataPost)
      .then(response => {
        
        console.log(response);

        if (response.data.success) {
          console.log("El usuario ha sido creado con exito!");
        }
        else {
          console.log("No se puso crear ", response.data.data);
        }
      })
      .catch(err => {
        console.log("Error 34 "+err);
      })
    }
    else {
      console.log("Por favor, rellene los campos");
    }
  }

  render() {

    const { classes } = this.props;

    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={8} className={classes.image} />
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square className={classes.lateralGrid}>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Registro
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Intelligent Delivery ©
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="fname"
                    name="firstName"
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="Primer Nombre"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Primer Apelido"
                    name="lastName"
                    autoComplete="lname"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Correo electronico"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="Quiero recibir información via email."
                  />
                </Grid>
              </Grid>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => this.sendUser()}
              >
                Iniciar sesión
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Ya tienes una cuenta? Inicia sesión.
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

signUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signUp);