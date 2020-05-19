import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

export default function AddressForm(props) {

  const existingData = (props.delivery !== undefined);

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
                id="firstName"
                name="firstName"
                label="Primer Nombre"
                fullWidth
                autoComplete="fname"
                value={existingData ? props.delivery.nombre : ''}
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
                value={existingData ? props.delivery.apellido : ''}
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
                value={existingData ? props.delivery.direccion1 : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address2"
                name="address2"
                label="Dirección de linea 2"
                fullWidth
                autoComplete="billing address-line2"
                value={existingData ? props.delivery.direccion2 : ''}
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
                value={existingData ? props.delivery.ciudad : ''}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField 
                id="state" 
                name="state" 
                label="Estado/Provincia/Región" 
                value={existingData ? props.delivery.region : ''} 
                fullWidth 
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="zip"
                name="zip"
                label="Zip / Código postal"
                fullWidth
                autoComplete="billing postal-code"
                value={existingData ? props.delivery.codigoPostal : ''}
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
                value={existingData ? props.delivery.pais : ''}
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