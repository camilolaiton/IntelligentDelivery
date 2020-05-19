import React, { Component } from 'react';
import DeliveryForm from '../../components/Forms/DeliveryForm';
import Menu from '../../components/Menu';
import PropTypes from 'prop-types';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme();

const styles = {
    layout: {
      width: 'auto',
      marginLeft: 2,
      marginRight: 2,
    },
    paper: {
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      padding: theme.spacing(2),
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
      },
    },
    buttons: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    button: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
    },
};

class CreateDelivery extends Component {
    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <Menu />
                <main className={classes.layout}>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Typography component="h1" variant="overline" align="left" style={{marginTop: 10,}}>
                            <Box fontWeight="fontWeightMedium" fontSize={20} letterSpacing={6}>
                                Crea un nuevo domicilio
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Paper className={classes.paper} elevation={10}>
                            <DeliveryForm />
                        </Paper>
                    </Grid>
                </main>
            </React.Fragment>
        );
    }
}

CreateDelivery.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateDelivery);