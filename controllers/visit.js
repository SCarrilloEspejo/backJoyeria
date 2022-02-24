'use strict';

var utils = require('../utils/writer.js');
var Visit = require('../service/VisitService');

module.exports.visit = function visit (req, res, next) {

  /*   console.log('orden Controller',newOrder); */
  Visit.visit()
      .then(function (response) {
        console.log('Respuesta',response);
        /* console.log('Respuesta', response)
          console.log('Respuesta res',res) */
          //res.body = {orderId: response}
           
        utils.writeJson(res, { response});
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
module.exports.newVisit = function visit (req, res, next) {

/*   console.log('orden Controller',newOrder); */
Visit.newVisit()
    .then(function (response) {
      console.log('Respuesta',response);
      /* console.log('Respuesta', response)
        console.log('Respuesta res',res) */
        //res.body = {orderId: response}
         
      utils.writeJson(res, { visit: response});
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
module.exports.newVisitcj = function visit (req, res, next) {

  /*   console.log('orden Controller',newOrder); */
  Visit.newVisitcj()
      .then(function (response) {
        console.log('Respuesta',response);
        /* console.log('Respuesta', response)
          console.log('Respuesta res',res) */
          //res.body = {orderId: response}
           
        utils.writeJson(res, { visit: response});
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
  };
module.exports.visitas = function visit (req, res, next) {

    /*   console.log('orden Controller',newOrder); */
    Visit.visitas()
        .then(function (response) {
          console.log('Respuesta',response);
          /* console.log('Respuesta', response)
            console.log('Respuesta res',res) */
            //res.body = {orderId: response}
             
          utils.writeJson(res, { visit: response});
        })
        .catch(function (response) {
          utils.writeJson(res, response);
        });
    };
