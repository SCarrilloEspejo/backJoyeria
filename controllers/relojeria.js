'use strict';

var utils = require('../utils/writer.js');
var Reloj = require('../service/RelojeriaService');

module.exports.relojeriaIndex = function relojeriaIndex(req, res, next) {
  console.log(req.swagger.params);
  var row = req.swagger.params['row'].value;
  console.log(row);
  Reloj.relojeriaIndex(row)
    .then(function (response) {
      console.log('Respuesta', response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
      //res.body = {orderId: response}

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.Search = function Search(req, res, next) {
  console.log(req.swagger.params);
  var hombre = req.swagger.params['hombre'].value;
  var mujer = req.swagger.params['mujer'].value;
  var niño = req.swagger.params['nino'].value;
  var niña = req.swagger.params['nina'].value;
  var familia = req.swagger.params['familia'].value;

  console.log(hombre);
  console.log(mujer);
  console.log(niño);
  console.log(niña);
  Reloj.Search(hombre, mujer, niño, niña, familia)
    .then(function (response) {
      console.log('Respuesta', response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
      //res.body = {orderId: response}

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.Search2 = function Search2(req, res, next) {
  console.log(req.swagger.params);
  var relojeria = req.swagger.params['relojes'].value;
  var hombre = req.swagger.params['hombre'].value;
  var mujer = req.swagger.params['mujer'].value;
  var niño = req.swagger.params['nino'].value;
  var niña = req.swagger.params['nina'].value;
  var familia = req.swagger.params['familia'].value;
  console.log(relojeria);
  console.log(hombre);
  console.log(mujer);
  console.log(niño);
  console.log(niña);
  Reloj.Search2(relojeria,hombre, mujer, niño, niña, familia)
    .then(function (response) {
     /// console.log('Respuesta', response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
      //res.body = {orderId: response}

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.SearchDescription = function SearchDescription(req, res, next) {
  console.log(req.swagger.params);
  var relojeria = req.swagger.params['relojes'].value;
  var hombre = req.swagger.params['hombre'].value;
  var mujer = req.swagger.params['mujer'].value;
  var niño = req.swagger.params['nino'].value;
  var niña = req.swagger.params['nina'].value;
  var familia = req.swagger.params['familia'].value;
  var description = req.swagger.params['description'].value;
  console.log(relojeria);
  console.log(hombre);
  console.log(mujer);
  console.log(niño);
  console.log(niña);
  Reloj.SearchDescription(relojeria,hombre, mujer, niño, niña, familia,description)
    .then(function (response) {
     /// console.log('Respuesta', response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
      //res.body = {orderId: response}

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.relojeriasFamilias = function relojeriasFamilias(req, res, next) {
  var relojeria = req.swagger.params['relojeria'].value;
  Reloj.relojeriasFamilias(relojeria)
    .then(function (response) {
      ///console.log('Respuesta', response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
      //res.body = {orderId: response}

      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};