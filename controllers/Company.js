'use strict';

var utils = require('../utils/writer.js');
var Company = require('../service/CompanyService');

module.exports.addCompany = function addCompany(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  console.log('====>', req.body);
  var body = {};//= req.swagger.params['body'].value;
  Company.addCompany(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
/* Esto es una prueba */

module.exports.deleteCompany = function deleteCompany(req, res, next) {
  var id = req.swagger.params['id'].value;
  Company.deleteCompany(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompanyText = function getCompanyText(req, res, next) {
  var text = req.swagger.params['text'].value;
  Company.getCompanyText(text)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCompany = function getCompany(req, res, next) {
  console.log('dentro de Controlador getCompany con el parametro');
  var id = req.swagger.params['id'].value;
  console.log('parametro', id);
  Company.getCompany(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompany = function updateCompany(req, res, next) {
  var body = req.swagger.params['body'].value;
  Company.updateCompany(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
