import React, { Component } from 'react';
import Menu from '../../components/Menu';
import DeliveryList from '../../components/Lists/DeliveryList';
import axios from 'axios';

const image = 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
const comida = 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
const iceCream = 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';

const estados = ['Registrado', 'En transito', 'En reparto', 'Entregado', 'Devolución']

const deliveryData = [
    {
        id: 1,
        img: comida,
        nombre: 'Camilo',
        apellido: 'Laiton',
        ciudad: 'Santa Marta',
        direccion1: 'Calle 29 K3',
        direccion2: 'Calle 5 Jk',
        region: 'Magdalena',
        codigoPostal: '10080',
        pais: 'Colombia',
        descripcion: 'Esta es la descripción del producto 1',
        estado: estados[0],
    },
    {
        id: 2,
        img: image,
        nombre: 'Jose',
        apellido: 'Laiton',
        ciudad: 'Bogotá',
        direccion1: 'Calle 29 K3',
        direccion2: 'Calle 5 Jk',
        region: 'Magdalena',
        codigoPostal: '10080',
        pais: 'Colombia',
        descripcion: 'Esta es la descripción del producto 2',
        estado: estados[1],
    },
    {
        id: 3,
        img: iceCream,
        nombre: 'Neyson',
        apellido: 'Laiton',
        ciudad: 'Medellin',
        direccion1: 'Calle 29 K3',
        direccion2: 'Calle 5 Jk',
        region: 'Magdalena',
        codigoPostal: '10080',
        pais: 'Colombia',
        descripcion: 'Esta es la descripción del producto 3',
        estado: estados[2],
    },
    {
        id: 4,
        img: image,
        nombre: 'Cristian',
        apellido: 'Vergel',
        ciudad: 'Pereira',
        direccion1: 'Calle 29 K3',
        direccion2: 'Calle 5 Jk',
        region: 'Magdalena',
        codigoPostal: '10080',
        pais: 'Colombia',
        descripcion: 'Esta es la descripción del producto 4',
        estado: estados[3],
    },
    {
        id: 5,
        img: comida,
        nombre: 'Fabian',
        apellido: 'Vergel',
        ciudad: 'Valledupar',
        direccion1: 'Calle 29 K3',
        direccion2: 'Calle 5 Jk',
        region: 'Magdalena',
        codigoPostal: '10080',
        pais: 'Colombia',
        descripcion: 'Esta es la descripción del producto 5',
        estado: estados[4],
    },
    {
        id: 6,
        img: iceCream,
        nombre: 'Maria',
        apellido: 'Pallares',
        ciudad: 'Lyon',
        direccion1: 'Calle 29 K3',
        direccion2: 'Calle 5 Jk',
        region: 'Magdalena',
        codigoPostal: '10080',
        pais: 'Colombia',
        descripcion: 'Esta es la descripción del producto 6',
        estado: estados[2],
    },
];

class ManageDelivery extends Component {
    
    constructor(props) 
    {
        super(props);
        this.state = {
            query_state: false,
            clients: [],
        }
        console.log(this.state);
    }

    componentDidMount()
    {
        let url = "http://" + window.location.hostname + ":5000/user/getClients";
        console.log(url);

        axios.get(url)
        .then(res => {
            console.log("RES: ", res);
            if (res.data.success) {
                
                this.setState({query_state: res.data.success, clients: res.data.clients});
                console.log("EXITO: ", this.state);
            }
            else {
                this.setState({query_state: false, clients: []});
                console.log("FALLO: ");
            }
        })
        .catch(err => {
            this.setState({query_state: false, clients: []});
            console.log(`Error de servidor: ${err}`);
        });

        console.log(this.state);
    }

    render() {
        return (
            <React.Fragment>
                <Menu />
                <DeliveryList deliveryData={deliveryData}/>
            </React.Fragment>
        );
    }
}

export default ManageDelivery;