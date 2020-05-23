import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';


const getProducts = () => {
  return [ { name: 'Costo por peso', desc: 'Existe un recargo por peso', price: '$12.000' },
          { name: 'Costo por seguridad', desc: 'Seguridad del producto en caso de perdida', price: '$3.450' },
          { name: 'Costo de entrega', desc: 'Entrega del producto', price: '$14.000' },
          { name: 'Transporte', desc: 'Transporte del lugar de origen al destino', price: '$55.000' },
          { name: 'Rastreo de producto', desc: '', price: 'Gratis' }, ]
}

const getPayments = (cardHolder) => {
  return [
    { name: 'Tipo de tarjeta', detail: 'Visa' },
    { name: 'Propietario', detail: `Mr/Ms ${cardHolder.firstName} ${cardHolder.lastName}` },
    { name: 'Número de tarjeta', detail: 'xxxx-xxxx-xxxx-1234' },
    { name: 'Fecha expiración', detail: '04/2024' },
  ];
}

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de producto
      </Typography>
      <List disablePadding>
        {getProducts().map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name} secondary={product.desc} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            $84.450
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Traslado
          </Typography>
          <Typography gutterBottom>Repartidor: Federico Bustamante</Typography>
          <Typography gutterBottom>{`Dirección 1: ${props.delivery.address1}`}</Typography>
          <Typography gutterBottom>{`Dirección 2: ${props.delivery.address2}`}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Detalles de pago
          </Typography>
          <Grid container>
            {getPayments(props.user).map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}