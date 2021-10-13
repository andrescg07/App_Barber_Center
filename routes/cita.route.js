import express from 'express';

const citaRoute = express.Router(); 
// importar el modelo nota

let CitaModel = require("../models/cita"); 
// import Cita from '../models/cita';

citaRoute.route("/").get((req, res) => { 
    CitaModel.find((error, data, next) => { 
      if (error) { 
        return next(error); 
      } else { 
        console.log(error); 
        res.json(data); 
      } 
    }); 
  }); 
  
  //CREAR CITA
   citaRoute.route("/create-appointment").post((req, res, next) => { 
    CitaModel.create(req.body, (error, data) => { 
      if (error) {
        console.log('hola mundo') 
        return next(error); 
      } else { 
        console.log('hola mundo 2')
        console.log(data); 
        res.json(data); 
      } 
    }); 
  }); 
  
  
  
  //EDITAR-CITA
  citaRoute.route("/edit-appointment/:id").get((req, res) => { 
    CitaModel.findById(req.params.id, (error, data, next) => { 
      if (error) { 
        console.log(error); 
        return next(error); 
      } else { 
        res.json(data); 
      } 
    }); 
  }); 
  
   
  // ACTUALIZAR CITA
  citaRoute.route("/update-appointment/:id").put((req, res, next) => { 
    CitaModel.findByIdAndUpdate( 
      req.params.id, 
      { 
        $set: req.body, 
      }, 
      (error, data) => {
          if (error) { 
              console.log(error); 
              return next(error); 
            } else { 
              res.json(data); 
              console.log("appointment successfully updated!"); 
            } 
          } 
        ); 
      }); 
       
      
  //ELIMINAR CITA 
      citaRoute.route("/delete-appointment/:id").delete((req, res, next) => { 
        CitaModel.findByIdAndRemove(req.params.id, (error, data) => { 
          if (error) { 
            return next(error); 
          } else { 
            res.status(200).json({ 
              msg: data, 
            }); 
          } 
        }); 
      }); 
       
      module.exports = citaRoute;
