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
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const theme = createMuiTheme();

const styles = {
  root: {
    display: 'flex',
    border: 1,
    style: { width: '5rem', height: '5rem' },
    margin: 5,
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
  },
  payIcon: {
    color: blue[500],
  },
  deleteIcon: {
    color: red[500],
  },
  dialog: {
    backgroundColor: fade(red[500], 0.15),
    borderRadius: 3,
    border: 0,
  },
  dialogCancelButton: {
    color: blue[500],
  },
  dialogDeleteButton: {
    color: red[500],
  }
};

class DeliveryItem extends Component {

  constructor(props) 
  {    
    super(props);
    this.state = {
      render: null,
      open: false,
    }
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = (closed) => {
    this.setState({open: false});

    if (closed) {
      console.log("Ha sido eliminado!");
    }
  };

  render() {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
        <Card className={classes.root} >
            
          <CardMedia
              className={classes.cover}
              image={this.props.delivery.img}
              title={this.props.delivery.cliente}
          />
            
          <div className={classes.details}>
              <CardContent className={classes.content} >
                <Typography component="h5" variant="h5">
                    Cliente: {`${this.props.delivery.nombre} ${this.props.delivery.apellido}`}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Ciudad: {this.props.delivery.ciudad}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                    Descripción: {this.props.delivery.descripcion}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                <IconButton aria-label="delete" onClick={this.handleOpen}>
                    <DeleteIcon className={classes.deleteIcon}/>
                </IconButton>
                <IconButton aria-label="pay" component={Link} to={ { pathname: `/payment/${this.props.delivery.id}`, state: {delivery: this.props.delivery} } }>
                    <PaymentIcon className={classes.payIcon}/>
                </IconButton>
                <IconButton aria-label="check">
                    <CheckIcon className={classes.checkIcon}/>
                </IconButton>

                <Typography variant="overline" color="textPrimary" >
                  <Box fontWeight="fontWeightMedium" fontSize={16} letterSpacing={4} flexShrink={0}>
                    {this.props.delivery.estado}
                  </Box>
                </Typography>
              </div>
          </div>
        </Card>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={ () => this.handleClose(false)}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
          className={classes.dialog}
        >
          <DialogTitle id="alert-dialog-slide-title">{`Seguro que quieres eliminar el domicilio de ${this.props.delivery.nombre}?`}</DialogTitle>
          <DialogContent >
            <DialogContentText id="alert-dialog-slide-description">
              Recuerda que una vez eliminado no podras recuperar su pedido.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose(false)} className={classes.dialogCancelButton}>
              Cancelar
            </Button>
            <Button onClick={() => this.handleClose(true)} className={classes.dialogDeleteButton}>
              Eliminar
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