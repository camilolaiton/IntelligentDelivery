// Exporting express
const express = require('express');
const app = express();

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// app.set('views', path.join(__dirname ,'/views'));
// app.use(body_parser.json({limit: '50mb'}));
// app.use(body_parser.urlencoded({limit: '50mb', extended: true}));

// app.use('/', express.static(path.resolve(__dirname + '/views/build/')));

// Setting port
const PORT = process.env.PORT || 5000;
app.set('port', PORT);

// Middlewares
app.use(express.json());

// Importing route
const userRouters = require('./routes/userRoute');
const userTypeRouters = require('./routes/userTypeRoute');
const countryRouters = require('./routes/countryRoute');
const deliveryTypeRouters = require('./routes/deliveryTypeRoute');
const deliveryStateRouters = require('./routes/deliveryStateRoute');
const deliveryRouters = require('./routes/deliveryRoute');

// Route
app.use('/user', userRouters);
app.use('/userType', userTypeRouters);
app.use('/country', countryRouters);
app.use('/deliveryType', deliveryTypeRouters);
app.use('/deliveryState', deliveryStateRouters);
app.use('/delivery', deliveryRouters);

app.use('/test', (req, res) => {
    res.send("Test route");
});

app.use('/', (req, res) => {
    res.send('Hello word from Nodejs');
});

app.listen(app.get('port'), () => {
    console.log(`Server running in port ${PORT}`);
});