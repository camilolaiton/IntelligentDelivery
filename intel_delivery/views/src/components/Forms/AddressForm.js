import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

class AddressForm extends Component {

  constructor (props) {
    super(props);

    this.state = {
      existingUserData: (this.props.user !== undefined),
      existingDeliveryData: (this.props.delivery !== undefined),
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      region: '',
      postal_code: '',
      country: '',
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
    }
  
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value 
    });
    
    this.props.parentCallback(e.target.id, e.target.value);
  };

  render() {
    return (
      <React.Fragment>
        <Typography variant="h4" gutterBottom>
              <ListItem key={'direccionTraslado'}>
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary='Dirección de traslado' />
              </ListItem>
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="prueba"
                  name="firstName"
                  label="Primer Nombre"
                  fullWidth
                  autoComplete="fname"
                  value={this.state.firstName}
                  onChange = {this.handleChange}
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
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="postal_code"
                  name="postal_code"
                  label="Zip / Código postal"
                  fullWidth
                  autoComplete="billing postal-code"
                  value={this.state.postal_code}
                  onChange = {this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Pais"
                  fullWidth
                  autoComplete="billing country"
                  value={this.state.country}
                  onChange = {this.handleChange}
                />
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

export default AddressForm;