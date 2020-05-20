import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Box from '@material-ui/core/Box';
import DeliveryItem from '../../components/Items/DeliveryItem';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import green from '@material-ui/core/colors/green';

function useBuscarEntrega(entregas) {
    
    const [ query, setQuery ] = React.useState('');
    const [ entregasFiltradas, setEntregasFiltradas ] =  React.useState(entregas);
    
    React.useMemo(() => {
        const resultado = entregas.filter(entrega => {
            return `${entrega.iddelivery} ${entrega.price} ${entrega.address1} ${entrega.country.contry_name} ${entrega.city} ${entrega.delivery_type.descrption} ${entrega.delivery_state.delivery_state}`
            .toLowerCase()
            .includes(query.toLowerCase());
        });

        setEntregasFiltradas(resultado);

    }, [ entregas, query ]);

    return { query, setQuery, entregasFiltradas }
}

const DeliveryList = (props) => {
    
    const { query, setQuery, entregasFiltradas } = useBuscarEntrega(props.deliveryData);
    const gotten_user = props.user;

    if (entregasFiltradas.length === 0) 
    {
        return(
            <React.Fragment>
                <CssBaseline />
                <Container>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Typography component="h1" variant="overline" align="left" style={{marginTop: 10,}}>
                            <Box fontWeight="fontWeightMedium" fontSize={20} letterSpacing={6}>
                                Lista de domicilios
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <Grid item xs={6}>
                            <FormControl fullWidth>
                                <Input
                                    id="deliverySearch"
                                    placeholder={'Buscar por cliente, ciudad, descripción o entrega'}
                                    value={query}
                                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                    }}
                                />    
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}>
                            <IconButton color="primary" aria-label="add to shopping cart" component={Link} to={{ pathname: '/createDelivery', state: {user: gotten_user}} }>
                                <AddShoppingCartIcon style={{color: green[500],}}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    
                    <GridList >
                        <Typography component="h1" variant="overline" align="left" style={{display: 'flex', marginLeft: '5%', }}>
                            <Box fontWeight="fontWeightMedium" fontSize={16} letterSpacing={3}>
                                No hay domicilios que entregar.
                            </Box>
                        </Typography>
                    </GridList>
                </Container>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Typography component="h1" variant="overline" align="left" style={{marginTop: 10,}}>
                        <Box fontWeight="fontWeightMedium" fontSize={20} letterSpacing={6}>
                            Lista de domicilios
                        </Box>
                    </Typography>
                </Grid>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Grid item xs={6}>
                        <FormControl fullWidth>
                            <Input
                                id="deliverySearch"
                                placeholder={'Buscar por cliente, ciudad, descripción o entrega'}
                                value={query}
                                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                onChange={(e) => {
                                    setQuery(e.target.value);
                                }}
                            />    
                        </FormControl>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton color="primary" aria-label="add to shopping cart" component={Link} to={{ pathname: '/createDelivery', state: {user: gotten_user}} }>
                            <AddShoppingCartIcon style={{color: green[500],}}/>
                        </IconButton>
                    </Grid>
                </Grid>
                
                <GridList >
                    {entregasFiltradas.map((delivery) => (
                        <DeliveryItem key={delivery.iddelivery} delivery={delivery} user={gotten_user} action={props.action}/>
                    ))}
                </GridList>
            </Container>
        </React.Fragment>
    );
};

export default DeliveryList;