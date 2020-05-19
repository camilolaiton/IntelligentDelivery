import React, { Component } from 'react';
import AddressForm from './AddressForm';
import Button from '@material-ui/core/Button';

class DeliveryForm extends Component {
  render() {
      return (
        <React.Fragment>
          <AddressForm/>
          <Button 
              variant="contained"
              color="primary"
              style={{display: 'flex', justifyContent: 'flex-end', padding: 10, }}
            >
              Registrar
          </Button>
        </React.Fragment>
      );
    }
}

export default DeliveryForm;