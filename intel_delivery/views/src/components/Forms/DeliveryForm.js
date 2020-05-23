import React, { Component } from 'react';
import AddressForm from './AddressForm';
import Button from '@material-ui/core/Button';
import InformationDialog from '../informationDialog';
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
      country: '1',
      description: '',
      iddelivery_type: '1',
    }
  }

  triggerChildDialog(typeDialog) {
    
    if (typeDialog) {
      this.refs.dialogSuccess.handleOpen();
      this.refs.addressForm.cleanState();
      this.forceUpdate();
    }
    else {
      this.refs.dialogFail.handleOpen();
    }
  }

  handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value 
    });
  };

  sendDelivery() {
    
    var filled_fields = true;

    for (var attribute in this.state) {

      if (this.state[attribute] === '' && attribute !== 'address2' && attribute !== 'description') {
        filled_fields = false;
      }
    }

    if (filled_fields) {
      console.log("PASO");
      
      let url = "http://" + window.location.hostname + ":5000/delivery/createDelivery";

      const dataPost = {
        address1: this.state.address1,
        address2: this.state.address2,
        postal_code: parseInt(this.state.postal_code),
        description: null,  // I have to change it
        order_date: '2020-05-17 11:39:36',
        deliver_date: null,
        region: this.state.region,
        city: this.state.city,
        idcountry: parseInt(this.state.country),
        iddelivery_type: parseInt(this.state.iddelivery_type), // I have to change it
        iduser: this.props.user.iduser,
        iddelivery_state: 1,
      }
      
      axios.post(url, dataPost)
      .then(response => {
        
        console.log(response);

        if (response.data.success) {
          this.triggerChildDialog(true);
        }
        else {
          this.triggerChildDialog(false);
        }
      })
      .catch(err => {
        console.log("Error 34 "+err);
      });
    }
    else {
      this.triggerChildDialog(false);
    }
  }

  getChildDataCallback = (targetState, targetValue) => {
    this.setState({[targetState]: targetValue});
    console.log(`PADRE: ${targetState} ${targetValue}`);
  }

  render() {
      return (
        <React.Fragment>
          <AddressForm 
            user={this.props.user} 
            parentCallback={this.getChildDataCallback} 
            pay={false}
            ref="addressForm"
            />
          <Button 
            id = "registrer_btn"
            variant="contained"
            color="primary"
            style={{display: 'flex', justifyContent: 'flex-end', padding: 10, }}
            onClick={() => this.sendDelivery()}
          >
              Registrar
          </Button>
          <InformationDialog
            ref="dialogSuccess"
            dialogTitle={`${this.props.user.firstName} ${this.props.user.lastName}, su pedido ha sido creado exitosamente!`}
            dialogInfo={'En su correo le enviaremos toda la información necesaria.'}
            dialogType={'success'}
          />

          <InformationDialog
            ref="dialogFail"
            dialogTitle={`${this.props.user.firstName} ${this.props.user.lastName}, su pedido no ha podido ser creado.`}
            dialogInfo={'Su pedido no pudo ser procesado.'}
            dialogType={'fail'}
          />
        </React.Fragment>
      );
    }
}

export default DeliveryForm;