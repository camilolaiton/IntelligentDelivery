import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import axios from 'axios';

const theme = createMuiTheme();

const styles = {
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
};

class AddressForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      existingUserData: (this.props.user !== undefined),
      existingDeliveryData: (this.props.delivery !== undefined),
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      address1: '',
      address2: '',
      city: '',
      region: '',
      postal_code: '',
      country: '1',
      description: '',
      iddelivery_type: '1',
      countries: [],
      deliveryTypes: [],
    }

    if (this.state.existingUserData) {
      this.state.firstName = this.props.user.firstName;
      this.state.lastName = this.props.user.lastName;
    }

    if (this.state.existingDeliveryData) {
      this.state.address1 = this.props.delivery.address1;
      this.state.address2 = this.props.delivery.address2;
      this.state.city = this.props.delivery.city;
      this.state.region = this.props.delivery.region;
      this.state.postal_code = this.props.delivery.postal_code;
      this.state.country = this.props.delivery.country.contry_name;
      this.state.description = this.props.delivery.country.description;
    }
  }

  getCountries () {

    let url = "http://" + window.location.hostname + ":5000/country/getCountries";

    axios.get(url)
    .then(res => {

        if (res.data.success) {
            
            this.setState({query_state: res.data.success, countries: res.data.countries});
        }
        else {
            this.setState({query_state: false, countries: []});
        }
    })
    .catch(err => {
        this.setState({query_state: false, countries: []});
        console.log(`Error de servidor: ${err}`);
    });
  }

  getDeliveryTypes () {
    let url = "http://" + window.location.hostname + ":5000/deliveryType/getDeliveryTypes";

    axios.get(url)
    .then(res => {

        if (res.data.success) {
            
            this.setState({query_state: res.data.success, deliveryTypes: res.data.deliveryTypes});
        }
        else {
            this.setState({query_state: false, deliveryTypes: []});
        }
    })
    .catch(err => {
        this.setState({query_state: false, deliveryTypes: []});
        console.log(`Error de servidor: ${err}`);
    });
  }

  componentDidMount()
  {
    // [GET] getting countries for selector

    this.getCountries();

    // [GET] getting deliveryStates for selector

    this.getDeliveryTypes();
  }

  handleChange = (e) => {
    console.log("target id: ", e.target.id);
    console.log("target value: ", e.target.value);
    this.setState({
        [e.target.id]: e.target.value 
    });
    
    this.props.parentCallback(e.target.id, e.target.value);
  };

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
          <ListItem key={'direccionTraslado'}>
            <ListItemIcon><HomeIcon/></ListItemIcon>
            <ListItemText primary='Dirección de traslado' />
          </ListItem>
        </Typography>

        <Grid container spacing={3} className={classes.root}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="Primer Nombre"
              fullWidth
              autoComplete="fname"
              value={this.state.firstName}
              onChange = {this.handleChange}
              disabled={this.props.pay}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Primer Apellido"
              fullWidth
              autoComplete="lname"
              value={this.state.lastName}
              onChange = {this.handleChange}
              disabled={this.props.pay}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Dirección de linea 1"
              fullWidth
              autoComplete="billing address-line1"
              value={this.state.address1}
              onChange = {this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Dirección de linea 2"
              fullWidth
              autoComplete="billing address-line2"
              value={this.state.address2}
              onChange = {this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Ciudad"
              fullWidth
              autoComplete="billing address-level2"
              value={this.state.city}
              onChange = {this.handleChange}
              disabled={this.props.pay}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField 
              id="region" 
              name="region" 
              label="Estado/Provincia/Región" 
              value={this.state.region} 
              onChange = {this.handleChange}
              fullWidth 
              disabled={this.props.pay}
            />
          </Grid>
          <Grid item xs>
            <TextField
              required
              id="postal_code"
              name="postal_code"
              label="Zip / Código postal"
              fullWidth
              autoComplete="billing postal-code"
              value={this.state.postal_code}
              onChange = {this.handleChange}
              disabled={this.props.pay}
            />
          </Grid>
          <Grid item xs>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="country-native-simple">País</InputLabel>
              <Select
                native
                id="country"
                value={this.state.country}
                onChange={this.handleChange}
                inputProps={{
                  name: 'country',
                  id: 'country',
                }}
                disabled={this.props.pay}
              >
                {this.state.countries.map((country) => (
                  <option key={`${country.idcountry}`} value={`${country.idcountry}`}>{`${country.contry_name.toUpperCase()}`}</option>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="deliveryType-native-simple">Tipo de entrega</InputLabel>
              <Select
                native
                id="iddelivery_type"
                value={this.state.iddelivery_type}
                onChange={this.handleChange}
                inputProps={{
                  name: 'iddelivery_type',
                  id: 'iddelivery_type',
                }}
                disabled={this.props.pay}
              >
                {this.state.deliveryTypes.map((deliveryType) => (
                  <option key={`${deliveryType.iddelivery_type}`} value={`${deliveryType.iddelivery_type}`}>{`${deliveryType.delivery_type.toUpperCase()}`}</option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
              label="Usa esta dirección para los detalles de pago."
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

AddressForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddressForm);