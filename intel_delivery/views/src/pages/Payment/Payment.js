import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from '../../components/Forms/AddressForm';
import PaymentForm from '../../components/Forms/PaymentForm';
import Review from '../../components/Review';
import Menu from '../../components/Menu';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Dirección de traslado', 'Detalles de pago', 'Verifica tu orden'];

const getChildDataCallback = (targetState, targetValue) => {
  console.log(`PADRE: ${targetState} ${targetValue}`);
}

function getStepContent(step, delivery, user) {
  switch (step) {
    case 0:
      return <AddressForm delivery={delivery} user={user} parentCallback={getChildDataCallback} pay={true}/>;
    case 1:
      return <PaymentForm delivery={delivery} user={user} pay={true}/>;
    case 2:
      return <Review delivery={delivery} user={user} pay={true}/>;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const delivery = props.location.state.delivery;
  const user = props.location.state.user;

  const handleNext = () => {
    setActiveStep(activeStep + 1);

    if (activeStep === steps.length - 1) {
      
      let url = "http://" + window.location.hostname + ":5000/delivery/updateDelivery/" + delivery.iddelivery;
      const data = { iddelivery_state:  8};
      
      axios.post(url, data)
      .then(response => {
        if (response.data.success) {
          console.log("La entrega fue pagada con exito!");
        }
        else {
          console.log("La entrega no fue pagada con exito!");
        }
      })
      .catch(err => {
        console.log("Error 34: ", err);
      });
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <Menu user={user}/>
      <main className={classes.layout}>
        <Paper className={classes.paper} elevation={10}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Señor(a) {`${user.firstName} ${user.lastName}`} gracias por tu orden.
                </Typography>
                <Typography variant="subtitle1">
                  Su numero de orden es #2001539. Hemos enviado un correo de confirmación para su orden 
                  y además le enviaremos un correo de actualización cuando esta este en camino.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, delivery, user)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button id="volverBtn" onClick={handleBack} className={classes.button}>
                      Volver
                    </Button>
                  )}
                  <Button
                    id="continuarBtn"
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Toma tu orden' : 'Siguiente'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}