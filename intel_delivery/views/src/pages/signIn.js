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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import blueGrey from '@material-ui/core/colors/blueGrey';
import axios from 'axios';
// import {getJwt} from '../helpers/jwt';

// https://images.unsplash.com/photo-1561494270-744b7f2ff037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80
// https://images.unsplash.com/photo-1561284081-ebf6c977bbde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1446&q=80
// https://images.unsplash.com/photo-1541544181051-e46607bc22a4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80
//https://www.npmjs.com/package/react-material-ui-carousel
//https://medium.com/@victorvarghese/super-cool-material-ui-components-in-react-native-dd7c4434bc26

const theme = createMuiTheme();

const styles = {
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1561494270-744b7f2ff037?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
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

class signIn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username_email: null,
      password: null,
    };
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value 
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var existent_user = false;

    let url = "http://" + window.location.hostname + ":5000/user/getClientByUsername/"+this.state.username_email+"/"+this.state.password;

    const data = axios.get(url)
    .then(res => {

        if (res.data.success) {

          if (res.data.client.length > 0) {
            
            this.props.history.push({
              pathname: '/manage',
              state: { user: res.data.client[0] }
            });
            existent_user = true;
          }

        }
        else {
          console.log("No existe el usuario");
        }
      })
      .catch(err => {
        console.log("No existe el usuario ", err);
    });
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
              Inicia sesión
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Intelligent Delivery ©
            </Typography>
            <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username_email"
                label="Nombre de usuario o dirección de correo"
                name="email"
                autoComplete="email"
                autoFocus
                onChange = {this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Recuerdame"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Inicia sesión
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="/getPassword" variant="body2">
                    Olvidaste tu contraseña?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Aún no tienes una cuenta? Registrate!"}
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

signIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(signIn);