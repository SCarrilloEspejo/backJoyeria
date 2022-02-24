'use strict';

const consultas = require("./../utils/query");
const modelCompany = require("./../models/company");
const notNull = require("./../utils/notNull");
/**
 * Add a new company
 * 
 *
 * body Company Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.addCompany = async function (pbody) {

var body = pbody;

  return new Promise(async function (resolve, reject) {
    let model = {};
    let myDate = new Date()
    let strSql = '';
    model = {
      fiscal: {
        rsocial: 'rsocial',
        address: 'address',
        province: 'province',
        document: 'document',
        postalCode: 'postalCode',
        population: 'population'
      },
      otherData: {
        sector: 'sectorId'
      },
      contact: {
        contacPerson: 'contacPerson',
        telephone: 'telephone',
        email: 'email'
      },
      id: 0
    }

    console.log('1 pBody', body);
    strSql = ""
    strSql = "INSERT INTO company";
    strSql = strSql + "(rsocial,"
    strSql = strSql + "address,"
    strSql = strSql + "province,"
    strSql = strSql + "doc,"
    strSql = strSql + "postalCode,"
    strSql = strSql + "population,"
    strSql = strSql + "sectorId,"
    strSql = strSql + "contacPerson,"
    strSql = strSql + "emailContactPerson,"
    strSql = strSql + "phoneContactPerson,"
    strSql = strSql + "creationDate)"
    strSql = strSql + "VALUES"
    strSql = strSql + "('" + body.fiscal.rsocial + "',";
    strSql = strSql + "'" + body.fiscal.address + "',";
    strSql = strSql + "'" + body.fiscal.province + "',";
    strSql = strSql + "'" + body.fiscal.document + "',";
    strSql = strSql + "'" + body.fiscal.postalCode + "',";
    strSql = strSql + "'" + body.fiscal.population + "',";
    strSql = strSql + "'" + body.otherData.sector + "',";
    strSql = strSql + "'" + body.contact.contacPerson + "',";
    strSql = strSql + "'" + body.contact.telephone + "',";
    strSql = strSql + "'" + body.contact.email + "',",
      strSql = strSql + "'" + myDate.getDay() + "/" + myDate.getMonth() + "/" + myDate.getFullYear() + "')";
    console.log('SQL', strSql);
    return await consultas.myQuery(strSql).then(result => {
      console.log('result =>', result)
      resolve(result);
    }).catch(error => {
      reject();
    });
  });
}


/**
 * Delete Company
 * 
 *
 * id String id for search
 * returns Company
 **/
exports.deleteCompany = function (id) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "fiscal": {
        "rsocial": "rsocial",
        "address": "address",
        "province": "province",
        "document": "document",
        "postalCode": "postalCode",
        "population": "population"
      },
      "otherData": {
        "sector": "sector"
      },
      "contact": {
        "contacPerson": "contacPerson",
        "telephone": "telephone",
        "email": "email"
      },
      "id": 0
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * get Company for text
 * 
 *
 * text String id for search
 * returns Company
 **/
exports.getCompanyText = function (text) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      "fiscal": {
        "rsocial": "rsocial",
        "address": "address",
        "province": "province",
        "document": "document",
        "postalCode": "postalCode",
        "population": "population"
      },
      "otherData": {
        "sector": "sector"
      },
      "contact": {
        "contacPerson": "contacPerson",
        "telephone": "telephone",
        "email": "email"
      },
      "id": 0
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new company
 * 
 *
 * id String id for search
 * returns Company
 **/
exports.getCompany = async function (id) {
  return new Promise(async function (resolve, reject) {

    var examples = {};
    examples['application/json'] = {
      "fiscal": {
        "rsocial": "rsocial",
        "address": "address",
        "province": "province",
        "document": "document",
        "postalCode": "postalCode",
        "population": "population"
      },
      "otherData": {
        "sector": "sector"
      },
      "contact": {
        "contacPerson": "contacPerson",
        "telephone": "telephone",
        "email": "email"
      },
      "id": 0
    };
    console.log('1 Servicio');
    await consultas.myQuery("SELECT * FROM COMPANY where id='" + id + "'").then(resultado => {
      console.log('2 resultado');
    
      resultado = resultado.recordset;
      let company = modelCompany;
      company.fiscal.rsocial = notNull.notNullString(resultado.fiscal.rsocial)
      company.fiscal.address = notNull.notNullString(resultado.fiscal.address)
      company.fiscal.province = notNull.notNullString(resultado.fiscal.province)
      company.fiscal.document = notNull.notNullString(resultado.fiscal.document)
      company.fiscal.postalCode = notNull.notNullString(resultado.fiscal.postalCode)
      company.fiscal.population = notNull.notNullString(resultado.fiscal.population)

      company.otherData.sectorId = notNull.notNullNumber(resultado.otherData.sectorId);

      company.contact.contacPerson = notNull.notNullString(resultado.contact.contacPerson);
      company.contact.telephone = notNull.notNullString(resultado.contact.phoneContactPerson);
      company.contact.email = notNull.notNullString(resultado.contact.emailContactPerson);

      company.id = resultado.id;

      resolve(company);
    }).catch(error => {
      console.log('error', error);

    });

  });
}


/**
 * Update  company
 * 
 *
 * body Company Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
exports.updateCompany = function (body) {
  return new Promise(function (resolve, reject) {
    resolve();
  });
}

