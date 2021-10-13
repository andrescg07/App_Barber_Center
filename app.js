import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const app = express();

//Conexion a base de datos
const mongoose = require('mongoose'); 
//const uri = 'mongodb://localhost:27017/myappprueba';

const uri='mongodb+srv://andres_07:andres1234@cluster0.tdt66.mongodb.net/AppBarberCenter?retryWrites=true&w=majority';

const options = {useNewUrlParser: true,  useUnifiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err) } 
);


// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));
// Rutas
// app.get('/', (req, res) => {
// //  res.send('Hello World!');

// });

app.use('/api', require('./routes/cita.route'));
// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
 console.log('Example app listening on port'+ app.get('puerto'));
});
