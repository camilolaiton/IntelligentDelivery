import React from 'react';
import Error404 from '../images/404.gif';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Menu from '../components/Menu';

const notFoundPage = () => {
    
    return (
        <React.Fragment>
            <Menu />
            <Grid container direction="row" justify="center">
                <Grid item xs={6} elevation={12} square>
                    <Paper >
                        <img src={Error404} alt='Imagen de página no encontrada'/>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default notFoundPage;