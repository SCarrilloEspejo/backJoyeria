'use strict';

var utils = require('../utils/writer.js');
var Company = require('../service/CompanyService');

module.exports.email = function email (req, res, next) {
 res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  console.log('====>',req.body);
  var body = {};//= req.swagger.params['body'].value;
  Company.addCompany(req.body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};