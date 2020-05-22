import React, { Component } from 'react';
import AddressForm from './AddressForm';
import Button from '@material-ui/core/Button';

class DeliveryForm extends Component {

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
  }

  getChildDataCallback = (targetState, targetValue) => {
    this.setState({[targetState]: targetValue});
  }

  render() {
      return (
        <React.Fragment>
          <AddressForm user={this.props.user} parentCallback={this.getChildDataCallback} />
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