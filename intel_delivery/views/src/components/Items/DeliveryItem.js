import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles, fade } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/HighlightOff';
import PaymentIcon from '@material-ui/icons/Payment';
import CheckIcon from '@material-ui/icons/AssignmentTurnedIn';
import blueGrey from '@material-ui/core/colors/blueGrey';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const image = 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
const comida = 'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80';
const home = 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=753&q=80'

// const theme = createMuiTheme();

const styles = {
  root: {
    display: 'flex',
    border: 1,
    style: { width: '5rem', height: '5rem' },
    margin: 10,
    backgroundColor: blueGrey[50],
    'margin-left': '5%',
    width: "90%",
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 300,
  },
  controls: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 2,
    paddingBottom: 1,
  },
  checkIcon: {
    height: 38,
    width: 38,
    color: green[500],
    paddingLeft: 5,
    paddingRigth: 5,
  },
  payIcon: {
    color: blue[500],
  },
  deleteIcon: {
    color: red[500],
  },
  iconCancelled: {
    height: 30,
    width: 30,
    color: grey[500],
    paddingLeft: 5,
    paddingRigth: 5,
  },
  iconDeliveryCancelled: {
    height: 30,
    width: 30,
    color: red[500],
    paddingLeft: 5,
    paddingRigth: 5,
  },
  dialog: {
    backgroundColor: fade(red[500], 0.40),
    borderRadius: 3,
    border: 0,
  },
  dialogSuccess: {
    backgroundColor: fade(green[500], 0.40),
    borderRadius: 3,
    border: 0,
  },
  dialogCancelButton: {
    color: blue[500],
  },
  dialogDeleteButton: {
    color: red[500],
  },
  dialogDeliverButton: {
    color: green[500],
  },
};

class DeliveryItem extends Component {

  constructor(props) 
  {    
    super(props);
    this.state = {
      render: null,
      openCancelDialog: false,
      openDeliveryDialog: false,
      img: '',
      cancelButtonActivated: true,
    }

    const delivery_type = this.props.delivery.delivery_type.delivery_type;
    
    // Choosing an image
    if (delivery_type === 'comida') {
      this.state.img = comida;
    }
    else if(delivery_type === 'ropa') {
      this.state.img = image;
    }
    else {
      this.state.img = home;
    }
  }

  cancelDelivery(iddelivery) {
    
    let url = "http://" + window.location.hostname + ":5000/delivery/updateDelivery/" + iddelivery;
    const data = { iddelivery_state:  7};
    
    axios.post(url, data)
    .then(response => {
      if (response.data.success) {
        this.props.action(this.props.delivery.iddelivery);
      }
      else {
        console.log("La entrega no pudo ser cancelada!");
      }
    })
    .catch(err => {
      console.log("Error 34: ", err);
    });
  }

  deliverDelivery(iddelivery) {
    
    let url = "http://" + window.location.hostname + ":5000/delivery/updateDelivery/" + iddelivery;
    const data = { iddelivery_state:  6};
    
    axios.post(url, data)
    .then(response => {
      if (response.data.success) {
        this.props.action(this.props.delivery.iddelivery);
      }
      else {
        console.log("La entrega fue entregada con exito!");
      }
    })
    .catch(err => {
      console.log("Error 34: ", err);
    });
  }

  handleOpen = (openTypeDialog) => {
    this.setState({[openTypeDialog]: true});
    console.log(this.state);
  };

  handleClose = (closeTypeDialog, closed) => {
    
    this.setState({[closeTypeDialog]: false});

    console.log(this.state);

    if (closed && closeTypeDialog === 'openCancelDialog') {
      // console.log("Ha sido cancelado!");
      this.cancelDelivery(this.props.delivery.iddelivery);
    }
    
    if (closed && closeTypeDialog === 'openDeliveryDialog'){
      //console.log("Ha sido entregado su pedido!");
      this.deliverDelivery(this.props.delivery.iddelivery);
    }
  };

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <Card className={classes.root} >
            
          <CardMedia
              className={classes.cover}
              image={this.state.img}
              title={this.props.delivery.delivery_type.delivery_type}
          />
            
          <div className={classes.details}>
              <CardContent className={classes.content} >

                {this.props.user.iduser === 1
                  ? (<Typography component="h5" variant="h5">
                      Cliente: {`${this.props.delivery.user.firstName} ${this.props.delivery.user.lastName}`}
                    </Typography>)
                  : ('')
                }

                <Typography component="h5" variant="h5">
                    Precio: {`${this.props.delivery.price}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Pais: {this.props.delivery.country.contry_name} Ciudad: {this.props.delivery.city}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Dirección principal: {this.props.delivery.address1}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Fecha de orden: {this.props.delivery.order_date}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    Descripción: {this.props.delivery.delivery_type.description}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                {this.props.delivery.delivery_state.iddelivery_state < 4
                  ? (<IconButton aria-label="delete" onClick={() => this.handleOpen('openCancelDialog')}>
                        <DeleteIcon className={classes.deleteIcon}/>
                    </IconButton>)
                  : (<IconButton aria-label="delete" disabled>
                        <DeleteIcon className={classes.iconCancelled}/>
                    </IconButton>)
                }
                {this.props.delivery.delivery_state.iddelivery_state < 4
                  ? (<IconButton aria-label="pay" component={Link} to={ { pathname: `/payment/${this.props.delivery.iddelivery}`, state: {delivery: this.props.delivery, user: this.props.user} } }>
                        <PaymentIcon className={classes.payIcon}/>
                    </IconButton>)
                  : (<IconButton aria-label="pay" disabled>
                        <PaymentIcon className={classes.iconCancelled}/>
                    </IconButton>)
                }
                
                {this.props.user.iduser === 1 //CORREGIR ACA LA PARTE DEL USUARIO ADMIN
                  ? (
                      this.props.delivery.delivery_state.delivery_state === 'entregado' || this.props.delivery.delivery_state.delivery_state === 'cancelado'
                      ? (<IconButton aria-label="check" disabled>
                            <CheckIcon className={classes.iconCancelled}/>
                        </IconButton>)
                      : (<IconButton aria-label="check" onClick={() => this.handleOpen('openDeliveryDialog')}>
                            <CheckIcon className={classes.checkIcon}/>
                        </IconButton>)
                    )
                  : (
                      this.props.delivery.delivery_state.delivery_state === 'entregado'
                      ? (<CheckIcon className={classes.checkIcon}/>)
                      : (this.props.delivery.delivery_state.delivery_state === 'cancelado'
                          ? (<CheckIcon className={classes.iconDeliveryCancelled}/>)
                          : (<CheckIcon className={classes.iconCancelled}/>)
                        )
                    )
                }

                <Typography variant="overline" color="textPrimary" >
                  <Box fontWeight="fontWeightMedium" fontSize={16} letterSpacing={4} flexShrink={0} style={{paddingLeft: 10}}>
                    {this.props.delivery.delivery_state.delivery_state}
                  </Box>
                </Typography>
              </div>
          </div>
        </Card>
        
        {/* Dialog for delivery cancel*/}

        <Dialog
          open={this.state.openCancelDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={ () => this.handleClose('openCancelDialog', false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          className={classes.dialog}
        >
          <DialogTitle id="alert-dialog-slide-title">{`Seguro que quieres cancelar el domicilio?`}</DialogTitle>
          <DialogContent >
            <DialogContentText id="alert-dialog-slide-description">
              Recuerda que una vez cancelado no podras recuperar tu pedido.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose('openCancelDialog', false)} className={classes.dialogCancelButton}>
              Cancelar
            </Button>
            <Button onClick={() => this.handleClose('openCancelDialog', true)} className={classes.dialogDeleteButton}>
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>

        {/* Dialog for deliver the delivery */}

        <Dialog
          open={this.state.openDeliveryDialog}
          TransitionComponent={Transition}
          keepMounted
          onClose={ () => this.handleClose('openDeliveryDialog', false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          className={classes.dialogSuccess}
        >
          <DialogTitle id="alert-dialog-slide-title">{`Seguro que quieres marcar como entregado el domicilio?`}</DialogTitle>
          <DialogContent >
            <DialogContentText id="alert-dialog-slide-description">
              Recuerda que una vez marcado como entregado, si quieres volver 
              a marcarlo en el estado anterior deberas comunicarte con soporte.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose('openDeliveryDialog', false)} className={classes.dialogCancelButton}>
              Cancelar
            </Button>
            <Button onClick={() => this.handleClose('openDeliveryDialog', true)} className={classes.dialogDeliverButton}>
              Entregar
            </Button>
          </DialogActions>
        </Dialog>

      </React.Fragment>
    );
  }
}

DeliveryItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeliveryItem);