import React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import Box from '@material-ui/core/Box';
import DeliveryItem from '../Items/DeliveryItem';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import green from '@material-ui/core/colors/green';
import DatePickerItem from '../Items/datePickerItem';

function useBuscarEntrega(entregas, fechaInferior, fechaSuperior) {
    
    const [ query, setQuery ] = React.useState('');
    const [ inferiorDate, setInferiorDate ] = React.useState(fechaInferior);
    const [ superiorDate, setSuperiorDate ] = React.useState(fechaSuperior);
    const [ entregasFiltradas, setEntregasFiltradas ] =  React.useState(entregas);

    React.useMemo(() => {
        const resultado = entregas.filter(entrega => {

            const searchQuery = `${entrega.address1} ${entrega.user.firstName} ${entrega.user.lastName} ${entrega.country.contry_name} ${entrega.city} ${entrega.delivery_state.delivery_state}`
            .toLowerCase()
            .includes(query.toLowerCase());
            
            var tempDate = entrega.order_date.split('T')[0].split("-");
            tempDate = new Date(parseInt(tempDate[0]), parseInt(tempDate[1])-1, parseInt(tempDate[2]))
            const searchDate = inferiorDate < tempDate.getTime() && tempDate.getTime() < superiorDate.getTime(); //Para llegar hasta esta fecha
            // console.log(`${tempDate} - ${date} - ${searchDate}`);
            console.log(`${inferiorDate} // ${tempDate}  // ${superiorDate} /  ${searchDate}`);
            return searchQuery && searchDate;
        });

        setEntregasFiltradas(resultado);

    }, [ entregas, query, inferiorDate , superiorDate ]);
    
    return { query, setQuery, setInferiorDate, setSuperiorDate, entregasFiltradas }
}


const DeliveryList = (props) => {
    
    const FIXED_INFERIOR_DATE = new Date(2000, 4, 1);
    const FIXED_SUPERIOR_DATE = new Date(2050, 4, 1);
    const { query, setQuery, setInferiorDate, setSuperiorDate, entregasFiltradas } = useBuscarEntrega(props.deliveryData, FIXED_INFERIOR_DATE, FIXED_SUPERIOR_DATE);
    const gotten_user = props.user;
    
    const getInferiorDataPicker = (data) => {
        // var prueba = new Date(2020, 4, 1);
        // console.log(`${data}`);
        // console.log(`${prueba}`);
        // console.log(data.getTime() < prueba.getTime());
        setInferiorDate(data);
    }
    
    const getSuperiorDataPicker = (data) => {
        // var prueba = new Date(2020, 4, 1);
        // console.log(`${data}`);
        // console.log(`${prueba}`);
        // console.log(data.getTime() < prueba.getTime());
        setSuperiorDate(data);
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
                <Grid container direction="row" justify="flex-start" alignItems="flex-start" >
                    <Grid item xs={6}>
                        <FormControl fullWidth style={{marginTop: -3,}}>
                            <Input
                                id="deliverySearch"
                                placeholder={'Buscar por ciudad, país, dirección o estado del pedido...'}
                                value={query}
                                startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                onChange={(e) => {
                                    setQuery(e.target.value);

                                    if (e.target.value === '') {
                                        setInferiorDate(FIXED_INFERIOR_DATE);
                                        setSuperiorDate(FIXED_SUPERIOR_DATE);
                                    }
                                }}
                            />  
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} style={{marginTop: -19,}}>
                        <DatePickerItem id= {"datePicker1"} parentCallback={getInferiorDataPicker} msg={'Seleccione fecha inical'} defaultValue={'2016-12-31'}/>
                    </Grid>
                    <Grid item xs={2} style={{marginTop: -19,}}>
                        <DatePickerItem id = {"datePicker2"} parentCallback={getSuperiorDataPicker} msg={'Seleccione fecha final'} defaultValue={'2022-12-31'}/>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton id="create_delovery_btn" color="primary" aria-label="create new delivery" component={Link} to={{ pathname: '/createDelivery', state: {user: gotten_user}} }>
                            <AddShoppingCartIcon style={{color: green[500],}}/>
                        </IconButton>
                    </Grid>
                </Grid>
                {entregasFiltradas.length === 0
                    ? (<GridList >
                            <Typography component="h1" variant="overline" align="left" style={{display: 'flex', marginLeft: '5%', }}>
                                <Box fontWeight="fontWeightMedium" fontSize={16} letterSpacing={3}>
                                    No hay domicilios que entregar.
                                </Box>
                            </Typography>
                        </GridList>
                        )
                    : ( <GridList >
                            {entregasFiltradas.map((delivery) => (
                                <DeliveryItem key={delivery.iddelivery} delivery={delivery} user={gotten_user} action={props.action}/>
                            ))}
                        </GridList>
                        )
                }
                
            </Container>
        </React.Fragment>
    );
};

export default DeliveryList;