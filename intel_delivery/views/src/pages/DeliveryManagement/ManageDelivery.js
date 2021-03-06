import React, { Component } from 'react';
import Menu from '../../components/Menu';
import DeliveryList from '../../components/Lists/DeliveryList';
import axios from 'axios';

class ManageDelivery extends Component {
    
    constructor(props) 
    {
        super(props);
        this.state = {
            query_state: false,
            deliveries: [],
            user: this.props.location.state.user,
            cancelMessage: '',
        }

        this.cancelHandler = this.cancelHandler.bind(this);
    }

    componentDidMount()
    {
        let url = "http://" + window.location.hostname + ":5000/delivery/getUserDeliveries/"+this.state.user.iduser;
        
        if (this.state.user.iduser === 1) {
            url = "http://" + window.location.hostname + ":5000/delivery/getDeliveries/"
        }

        axios.get(url)
        .then(res => {

            if (res.data.success) {
                
                this.setState({query_state: res.data.success, deliveries: res.data.deliveries});
            }
            else {
                this.setState({query_state: false, deliveries: []});
            }
        })
        .catch(err => {
            this.setState({query_state: false, deliveries: []});
            console.log(`Error de servidor: ${err}`);
        });

    }

    cancelHandler (e) {
        console.log(`El pedido ${e} ha sido cancelado o entregado`);
        this.componentDidMount();
        this.forceUpdate();
    }

    render() {
        return (
            <React.Fragment>
                <Menu user={this.state.user}/>
                <DeliveryList deliveryData={this.state.deliveries} user={this.state.user} action={this.cancelHandler}/>
            </React.Fragment>
        );
    }
}

export default ManageDelivery;