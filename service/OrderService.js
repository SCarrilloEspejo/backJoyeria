'use strict';


const consultas = require("../utils/query");
const modelCompany = require("../models/company");
const notNull = require("../utils/notNull");
const cryptojs = require('crypto-js');
const sendEmail = require("../utils/nodemailer");
/**
 * Find me product
 * 
 *
 * categoria String Status values that need to be considered for filter
 * returns Product
 **/
exports.newOrder = function (order) {

  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];
    let myOrderTem = JSON.parse(JSON.stringify(order));
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let total = 0;
    let strSqlCabecera = "INSERT INTO PEDIDO";
    strSqlCabecera = strSqlCabecera + "(date,name,address,population,province,cp,telefono,email,accept,publicidad,total)"
    strSqlCabecera = strSqlCabecera + "VALUES (";
    strSqlCabecera = strSqlCabecera + "'" + date + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.name + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.address + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.population + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.province + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.cp + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.telefono + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.email + "',";
    strSqlCabecera = strSqlCabecera + "" + order.accept + ",";
    strSqlCabecera = strSqlCabecera + "" + order.publicidad + ",";
    strSqlCabecera = strSqlCabecera + "'" + total + "')";
    console.log(strSqlCabecera);

     await consultas.myQuery(strSqlCabecera).then(async resultado => {
      let idCarrito = 0
      resultado = resultado.recordset;
      await consultas.myQuery('SELECT TOP(1) ID FROM PEDIDO ORDER BY ID DESC').then(async idResultado => {
        console.log('ID ==>', idResultado);
        console.log('ID Carrito ===>', idResultado.recordset.ID);
        idCarrito = idResultado.recordset[0].ID;
        let details = [];
        let strSqlBody;
        details = JSON.parse(JSON.stringify(order.details));
        console.log('details', details);
        details.forEach(async element => {
          strSqlBody = "";
          strSqlBody = "INSERT INTO PEDIDO_DETALLES";
          strSqlBody = strSqlBody + "(idCarrito,idLinea,DESCRIP_CORTA,IMG,OBSERVACIONES,REFERENCIA,PVENTAS)";
          strSqlBody = strSqlBody + " VALUES (";
          strSqlBody = strSqlBody + idCarrito + ",";
          strSqlBody = strSqlBody + "'" + element.idLinea + "',";
          strSqlBody = strSqlBody + "'" + element.DESCRIP_CORTA + "',";
          strSqlBody = strSqlBody + "'" + element.IMG + "',";
          strSqlBody = strSqlBody + "'" + element.OBSERVACIONES + "',";
          strSqlBody = strSqlBody + "'" + element.REFERENCIA + "',";
          strSqlBody = strSqlBody + "'" + element.PVENTAS + "')";
          console.log(strSqlBody);
          await consultas.myQuery(strSqlBody).then(async resultadoBody => {

            resultadoBody = resultadoBody.recordset;
            //await email.main(order);
          }).catch(error => {
            console.log('error', error);
            reject();
          });
        });

          console.log(order.payload);
          order.payload.DS_MERCHANT_ORDER = order.payload.DS_MERCHANT_ORDER + idCarrito;

          var merchantWordArray = cryptojs.enc.Utf8.parse(JSON.stringify(order.payload));
          var merchantBase64 = merchantWordArray.toString(cryptojs.enc.Base64);

          // Decode key
          var keyWordArray = cryptojs.enc.Base64.parse("FstHxyURGfn1RNHVePSQlC5w1J3rxQdK");

          // Generate transaction key
          var iv = cryptojs.enc.Hex.parse("0000000000000000");
          var cipher = cryptojs.TripleDES.encrypt(order.payload.DS_MERCHANT_ORDER, keyWordArray, {
            iv: iv,
            mode: cryptojs.mode.CBC,
            padding: cryptojs.pad.ZeroPadding
          });


          // Sign
          var signature = cryptojs.HmacSHA256(merchantBase64, cipher.ciphertext);
          var signatureBase64 = signature.toString(cryptojs.enc.Base64);

          // Done, we can return response
          var response = {
            idCarrito: idCarrito,
            signatureVersion: "HMAC_SHA256_V1",
            merchantParameters: merchantBase64,
            signature: signatureBase64
          };
          resolve(response);
        
      });

    }).catch(error => {
      console.log('error', error);

    });

  });
}
exports.newOrderCj = function (order) {

  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];
    let myOrderTem = JSON.parse(JSON.stringify(order));
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let total = 0;
    let strSqlCabecera = "INSERT INTO PEDIDOCJ";
    strSqlCabecera = strSqlCabecera + "(date,name,address,population,province,cp,telefono,email,accept,publicidad,total)"
    strSqlCabecera = strSqlCabecera + "VALUES (";
    strSqlCabecera = strSqlCabecera + "'" + date + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.name + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.address + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.population + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.province + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.cp + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.telefono + "',";
    strSqlCabecera = strSqlCabecera + "'" + order.email + "',";
    strSqlCabecera = strSqlCabecera + "" + order.accept + ",";
    strSqlCabecera = strSqlCabecera + "" + order.publicidad + ",";
    strSqlCabecera = strSqlCabecera + "'" + total + "')";
    console.log(strSqlCabecera);

     await consultas.myQuery(strSqlCabecera).then(async resultado => {
      let idCarrito = 0
      resultado = resultado.recordset;
      await consultas.myQuery('SELECT TOP(1) ID FROM PEDIDOCJ ORDER BY ID DESC').then(async idResultado => {
        console.log('ID ==>', idResultado);
        console.log('ID Carrito ===>', idResultado.recordset.ID);
        idCarrito = idResultado.recordset[0].ID;
        let details = [];
        let strSqlBody;
        details = JSON.parse(JSON.stringify(order.details));
        console.log('details', details);
        details.forEach(async element => {
          strSqlBody = "";
          strSqlBody = "INSERT INTO PEDIDOCJ_DETALLES";
          strSqlBody = strSqlBody + "(idCarrito,idLinea,DESCRIP_CORTA,IMG,OBSERVACIONES,REFERENCIA,PVENTAS)";
          strSqlBody = strSqlBody + " VALUES (";
          strSqlBody = strSqlBody + idCarrito + ",";
          strSqlBody = strSqlBody + "'" + element.idLinea + "',";
          strSqlBody = strSqlBody + "'" + element.DESCRIP_CORTA + "',";
          strSqlBody = strSqlBody + "'" + element.IMG + "',";
          strSqlBody = strSqlBody + "'" + element.OBSERVACIONES + "',";
          strSqlBody = strSqlBody + "'" + element.REFERENCIA + "',";
          strSqlBody = strSqlBody + "'" + element.PVENTAS + "')";
          console.log(strSqlBody);
          await consultas.myQuery(strSqlBody).then(async resultadoBody => {

            resultadoBody = resultadoBody.recordset;
            //await email.main(order);
          }).catch(error => {
            console.log('error', error);
            reject();
          });
        });

          console.log(order.payload);
          order.payload.DS_MERCHANT_ORDER = order.payload.DS_MERCHANT_ORDER + idCarrito;

          var merchantWordArray = cryptojs.enc.Utf8.parse(JSON.stringify(order.payload));
          var merchantBase64 = merchantWordArray.toString(cryptojs.enc.Base64);

          // Decode key
          var keyWordArray = cryptojs.enc.Base64.parse("FstHxyURGfn1RNHVePSQlC5w1J3rxQdK");

          // Generate transaction key
          var iv = cryptojs.enc.Hex.parse("0000000000000000");
          var cipher = cryptojs.TripleDES.encrypt(order.payload.DS_MERCHANT_ORDER, keyWordArray, {
            iv: iv,
            mode: cryptojs.mode.CBC,
            padding: cryptojs.pad.ZeroPadding
          });


          // Sign
          var signature = cryptojs.HmacSHA256(merchantBase64, cipher.ciphertext);
          var signatureBase64 = signature.toString(cryptojs.enc.Base64);

          // Done, we can return response
          var response = {
            idCarrito: idCarrito,
            signatureVersion: "HMAC_SHA256_V1",
            merchantParameters: merchantBase64,
            signature: signatureBase64
          };
          resolve(response);
        
      });

    }).catch(error => {
      console.log('error', error);

    });

  });
}
exports.email = function (email) {
  console.log('2');
  return new Promise(async function (resolve, reject) {

    console.log('email',email);
    resolve(await sendEmail.sendMail(email));

});
}
exports.sendMailcj = function (email) {
  console.log('2');
  return new Promise(async function (resolve, reject) {

    console.log('email',email);
    resolve(await sendEmail.sendMailcj(email));

});}
