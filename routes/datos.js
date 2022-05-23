var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Marvel = require('../modelos/datos');

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  Marvel.find({}, (err, datos)=>{
    if(err){
      res.json({'Error':'No existe'})
    }else{
      res.status(200).json(datos);
    }
  });
});

router.post('/', (req, res, next)=>{
  var personaje = Marvel({
    id: req.body.id,
    nombre: req.body.nombre,
    apodo: req.body.apodo,
    poder: req.body.poder,
    pelicula: req.body.pelicula,
    enemigo: req.body.enemigo
  });
  personaje.save((err,data)=>{
    if(err){
      res.json({'error':"Error al insertar"});
    }else{
      res.status(200).json(data);
    }
  });
});

router.delete('/:idMar', function(req, res, next) {
  Marvel.deleteOne({'id':req.params.idMar}, (err)=>{
    if(err){
      res.json({'Error':'No existe'})
    }else{
      res.json({'Estatus':'Borrado'})
    }
  });
});

router.patch('/:idMar', function(req, res, next) {
  const body = req.body
  Marvel.updateOne({'id':req.params.idMar},
  body,
  (err)=>{
    if(err){
      res.json({'Error':'No existe'})
    }else{
      res.json({'Estatus':'Actualizado'})
    }
  });
}
);

module.exports = router;
