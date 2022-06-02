const express = require('express');
const req = require('express/lib/request');
const app = express();

const morgan = require('morgan');

var cors = require('cors');
app.use(cors())

//settings
app.set('port',process.env.PORT || 3001)


//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json())


//Rutas
app.use(require('./routes/index.js'));


//Empezando el servidor
app.listen(app.get('port'), () =>{
    console.log(`Puerto: ${3001}`);
});