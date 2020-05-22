import React, { Component } from 'react';
import AddressForm from './AddressForm';
import Button from '@material-ui/core/Button';
import axios from 'axios';

class DeliveryForm extends Component {

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
      country: '',
    }
  }

  sendDelivery() {
    
    var filled_fields = true;

    for (var attribute in this.state) {

      if (this.state[attribute] === '') {
        filled_fields = false;
      }
    }

    if (filled_fields) {

      let url = "http://" + window.location.hostname + ":5000/delivery/createDelivery";

      const dataPost = {
        address1: this.state.address1,
        address2: this.state.address2,
        postal_code: this.state.postal_code,
        description: '',  // I have to change it
        order_date: '2020-05-17 11:39:36',
        deliver_date: '',
        region: this.state.region,
        city: this.state.city,
        idcountry: 1, // this.state.country,
        iddelivery_type: 1, // I have to change it
        iduser: this.props.user.iduser,
        iddelivery_state: 1,
      }
      
      axios.post(url, dataPost)
      .then(response => {
        
        console.log(response);

        if (response.data.success) {
          console.log("El pedido ha sido creado con exito!");
        }
        else {
          console.log("No se puso crear ", response.data.data);
        }
      })
      .catch(err => {
        console.log("Error 34 "+err);
      });
    }
    else {
      console.log("Por favor, rellene los campos");
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
            onClick={() => this.sendDelivery()}
          >
              Registrar
          </Button>
        </React.Fragment>
      );
    }
}

export default DeliveryForm;