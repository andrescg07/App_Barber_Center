// import mongoose from 'mongoose';

// const Schema = mongoose.Schema;

// const citaSchema = new Schema({

//  nombre: {type: String, required: [true, 'Nombre obligatorio']},
//  correo: String,
//  telefono: Number, 
//  hora: String,
//  fecha:{type: Date},
// //  date:{type: Date, default: Date.now}
 
// });

// // Convertir a modelo
// const Cita= mongoose.model('Cita', citaSchema);
// export default Cita;

const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
 
let citaSchema = new Schema( 
  { 
    nombre: { 
      type: String, 
    }, 
    correo: { 
      type: String, 
    }, 
    telefono: { 
      type: Number, 
    },
    hora: { 
      type: String, 
    }, 

    fecha:  
      {type: Date}, 
    
  }, 
  { 
    collection: "citas", 
  } 
); 
 
module.exports = mongoose.model("Cita", citaSchema);
