'use strict';

var utils = require('../utils/writer.js');
var Order = require('../service/OrderService');

module.exports.newOrder = function newOrder (req, res, next) {
  
  var newOrder = req.body;
  

/*   console.log('orden Controller',newOrder); */
  Order.newOrder(newOrder)
    .then(function (response) {
      console.log('Respuesta',response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
        //res.body = {orderId: response}
         
      utils.writeJson(res, { order: response});
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.newOrderCj = function newOrderCj (req, res, next) {
  
  var newOrder = req.body;
  

/*   console.log('orden Controller',newOrder); */
  Order.newOrderCj(newOrder)
    .then(function (response) {
      console.log('Respuesta',response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
        //res.body = {orderId: response}
         
      utils.writeJson(res, { order: response});
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.email = function email (req, res, next) {
  console.log('1');
  var email = req.body;

  console.log('email',email);
/*   console.log('orden Controller',newOrder); */
  Order.email(email)
    .then(function (response) {
      console.log('Respuesta',response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
        //res.body = {orderId: response}
         
      utils.writeJson(res, { order: response});
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailcj = function emailcj (req, res, next) {
  console.log('1');
  var email = req.body;

  console.log('email',email);
/*   console.log('orden Controller',newOrder); */
  Order.sendMailcj(email)
    .then(function (response) {
      console.log('Respuesta',response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
        //res.body = {orderId: response}
         
      utils.writeJson(res, { order: response});
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};