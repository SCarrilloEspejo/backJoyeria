'use strict';

var utils = require('../utils/writer.js');
var Product = require('../service/ProductService');

module.exports.categoria = function categoria (req, res, next) {
  var categoria = req.swagger.params['categoria'].value;
  Product.categoria(categoria)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.special = function special (req, res, next) {
  console.log('CONTROLADOR')
  var PARAMETRO = req.swagger.params['PARAMETRO'].value;
  

  console.log('PARAMETRO',PARAMETRO)
  Product.special(PARAMETRO)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.mvcategoria = function mvcategoria (req, res, next) {
  var relojes = req.swagger.params['relojes'].value;
  var firmas = req.swagger.params['firmas'].value;
  var oro = req.swagger.params['oro'].value;
  var plata = req.swagger.params['plata'].value;
  var regalos = req.swagger.params['regalos'].value;
  var ofertas = req.swagger.params['ofertas'].value;


  Product.mvcategoria(relojes,firmas,oro,plata,regalos,ofertas)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.categoriaReloj = function categoriaReloj (req, res, next) {
  var txtSearch = req.swagger.params['txtSearch'].value;
  var familia = req.swagger.params['familia'].value;
  
  Product.categoriaReloj(txtSearch,familia)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.findProduct = function findProduct (req, res, next) {
  var ref = req.swagger.params['ref'].value;
  Product.findProduct(ref)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.portada = function portada (req, res, next) {

  var row = req.swagger.params['row'].value;
  Product.portada(row)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.promocion = function findProduct (req, res, next) {
  var codigo = req.swagger.params['codigo'].value;
  Product.promocion(codigo)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};