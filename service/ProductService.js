'use strict';


const consultas = require("./../utils/query");
//const consultas = require("./../utils/connectsql");
const modelCompany = require("./../models/company");
const notNull = require("./../utils/notNull");

/**
 * Find me product
 * 
 *
 * categoria String Status values that need to be considered for filter
 * returns Product
 **/
exports.categoria = function (categoria) {

  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];

    let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
    strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) AS PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
    strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
    strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA,GRABAR";
    strSql = "SELECT TOP(80) " + strSql + " FROM CAYETANO_ARTI WHERE DESCRIP_CORTA LIKE '%" + categoria + "%' and STOCK > 0  and PVENTA > 0  AND RELOJES = 0 ORDER BY ID DESC";
    if(categoria === 'anillos'){
      strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
      strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) AS PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
      strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
      strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA,GRABAR";
      strSql = "SELECT TOP(80) " + strSql + " FROM CAYETANO_ARTI WHERE DESCRIP_CORTA LIKE '%anillo%' or DESCRIP_CORTA LIKE '%sortija%' and STOCK > 0 and PVENTA > 0 AND RELOJES = 0 ORDER BY ID DESC";
    }

    console.log(strSql);
    await consultas.myQuery(strSql).then(resultado => {
      console.log('Resultado Fin',resultado)
     /// resultado = resultado;
      resolve(resultado.recordset);
    }).catch(error => {
      console.log('error', error);

    });

  });
}

exports.special = function (PARAMETRO) {
  
  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];
    let strSql ='';
    let countParams = 0;
    let strSqlParam = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
    strSqlParam = strSqlParam + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) AS PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
    strSqlParam = strSqlParam + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
    strSqlParam = strSqlParam + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA,GRABAR";
    strSql = "SELECT TOP(80) " + strSqlParam + " FROM CAYETANO_ARTI ";

    if(PARAMETRO === '' || PARAMETRO === undefined){
      strSql = strSql + "WHERE REGALOS_ESPECIALES='True'"
      
    }else{
      strSql = strSql +  "WHERE REGALOS_ESPECIALES='True' AND " + PARAMETRO  + "= 'True'"
    }
    
    ///strSql = strSql +  "ENAMORADO = '" + ENAMORADO + "' AND "
    ////strSql = strSql +  "PAPA = '" + PAPA + "' AND "
    ///strSql = strSql +  "MAMA = '" + MAMA + "' AND "
    ////strSql = strSql +  "COMUNIONES = '" + COMUNIONES + "' AND "
    ////strSql = strSql +  "INFANTIL = '" + INFANTIL + "' AND "
    ////strSql = strSql +  "FAMILIAS = '" + FAMILIA + "' AND "
    ///strSql = strSql +  "PROFESORES = '" + PROFESORES + "' AND "
    ///strSql = strSql +  "BODAS = '" + BODAS + "'"

    console.log(strSql);
    await consultas.myQuery(strSql).then(resultado => {
      ///console.log('Resultado Fin',resultado)
     /// resultado = resultado;
      resolve(resultado.recordset);
    }).catch(error => {
      console.log('error', error);

    });

  });
}

exports.mvcategoria = function (relojes,firmas,oro,plata,regalos,ofertas) {

  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];

    let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
    strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) AS PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
    strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
    strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA,GRABAR";
    strSql = "SELECT " + strSql + " FROM CAYETANO_ARTI WHERE  STOCK > 0  and PVENTA > 0 ";

    strSql = strSql + " AND RELOJES=" + relojes;
    strSql = strSql + " AND JOYERIA_FIRMA=" + firmas;
    strSql = strSql + " AND ORO=" + oro;
    strSql = strSql + " AND PLATA=" + plata;
    strSql = strSql + " AND REGALOS_ESPECIALES=" + regalos;
    strSql = strSql + " AND OFERTAS=" + ofertas;
    strSql = strSql + " ORDER BY ID DESC"

    console.log(strSql);
    await consultas.myQuery(strSql).then(resultado => {
      console.log('Resultado Fin',resultado)
     /// resultado = resultado;
      resolve(resultado.recordset);
    }).catch(error => {
      console.log('error', error);

    });

  });
}

exports.categoriaReloj = function (categoriaReloj,familia) {

  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];

    let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
    strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) AS PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
    strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
    strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA,GRABAR";
    console.log('Categoria',categoriaReloj)
    if(categoriaReloj === '0'){
      strSql = "SELECT TOP(20) " + strSql + " FROM CAYETANO_ARTI WHERE  STOCK > 0 and PVENTA > 0  AND RELOJES = 1";
    }else {
      strSql = "SELECT TOP(20) " + strSql + " FROM CAYETANO_ARTI WHERE DESCRIP_CORTA LIKE '%" + categoriaReloj + "%' and STOCK > 0 and  PVENTA > 0  AND RELOJES = 1";
    }
    if(familia !== 0){
      strSql = strSql + " AND FAMILIA=" + familia;  
    }
    strSql = strSql + " ORDER BY ID DESC";


    console.log(strSql);
    await consultas.myQuery(strSql).then(resultado => {
      ///console.log('Resultado Fin',resultado)
     /// resultado = resultado;
      resolve(resultado);
    }).catch(error => {
      console.log('error', error);

    });

  });
}

/**
 * Find me product
 * 
 *
 * ref String Status values that need to be considered for filter
 * returns Product
 **/
exports.findProduct = function (ref) {
  return new Promise(async function (resolve, reject) {

    let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
    strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) AS PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
    strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
    strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA,GRABAR";


    console.log("SELECT " + strSql + " FROM CAYETANO_ARTI WHERE referencia='" + ref + "'");
    await consultas.myQuery("SELECT " + strSql + " FROM CAYETANO_ARTI WHERE referencia='" + ref + "'")
    .then(resultado =>{
      console.log('consulta referencia',resultado);
      console.log("UPDATE CAYETANO_ARTI SET VISITADO= VISITADO + 1  where referencia='" + ref + "'");
      consultas.myQuery("UPDATE CAYETANO_ARTI SET VISITADO= VISITADO + 1  where referencia='" + ref + "'");
      resolve(resultado.recordset);
    })
    .catch(error =>{
      console.log('error'. error);
    });
    
});
}
/**
 * Find me product
 * 
 *
 * ref String Status values that need to be considered for filter
 * returns Product
 **/
exports.portada = async function (row) {
  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];
    let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
    strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) as PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
    strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
    strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA,GRABAR";
    console.log("SELECT TOP(" + row + ") " + strSql + " FROM CAYETANO_ARTI WHERE (DESCRIP_CORTA LIKE '%COLGANTE%' or DESCRIP_CORTA LIKE '%pendiente%' or DESCRIP_CORTA LIKE '%sortija%') and STOCK > 0 and PVENTA > 0  ORDER BY VISITADO DESC");
    await consultas.myQuery("SELECT TOP(" + row + ") " + strSql + " FROM CAYETANO_ARTI WHERE (DESCRIP_CORTA LIKE '%salvatore%' or DESCRIP_CORTA LIKE '%tommy%' or DESCRIP_CORTA LIKE '%victoria%') and STOCK > 0 and PVENTA > 0 and PVENTA > 0 and RELOJES = 0 ORDER BY VISITADO DESC").then(resultado => {

      resolve(resultado.recordset);
    }).catch(error => {
      console.log('error', error);

    });

  });
}

exports.promocion = async function (codigo) {
  return new Promise(async function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {

      }
    ];
    let strSql = "SELECT * FROM PROMOCIONES WHERE CODIGO LIKE '%" + codigo + "%'"; 
    console.log(strSql);
    await consultas.myQuery(strSql).then(resultadoCodigo => {

      resolve(resultadoCodigo.recordset);
    }).catch(error => {
      console.log('error', error);

    });

  });
}

