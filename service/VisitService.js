const consultas = require("../utils/query");
exports.visit = function () {

    return new Promise(async function (resolve, reject) {

        let date = new Date();
        let correlador = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
        date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let total = 0;
        let strVisitas = "SELECT COUNT(*) FROM VISITASREGALAJOYAS";
        await consultas.myQuery(strVisitas).then(async resultado => {
            resultado = resultado.recordset;
            console.log(resultado[0]['']);
            resolve({ VISITAS: resultado[0][''] });

        }).catch(error => {
            resolve(error);
        });
    });
}
exports.newVisit = function () {

    return new Promise(async function (resolve, reject) {

        let date = new Date();
        let correlador = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
        date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let total = 0;
        let strVisitas = "INSERT INTO VISITASREGALAJOYAS";
        strVisitas = strVisitas + "(correlador,fecha,visita)"
        strVisitas = strVisitas + "VALUES (";
        strVisitas = strVisitas + "'" + correlador + "',";
        strVisitas = strVisitas + "'" + date + "',";
        strVisitas = strVisitas + "" + 1 + ")";
        await consultas.myQuery(strVisitas).then(async resultado => {
            resultado = resultado.recordset;

            resolve('OK');

        }).catch(error => {
            resolve(error);
        });
    });
}

exports.newVisitcj = function () {

    return new Promise(async function (resolve, reject) {

        let date = new Date();
        let correlador = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
        date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let total = 0;
        let strVisitas = "INSERT INTO VISITASCJ";
        strVisitas = strVisitas + "(correlador,fecha,visita)"
        strVisitas = strVisitas + "VALUES (";
        strVisitas = strVisitas + "'" + correlador + "',";
        strVisitas = strVisitas + "'" + date + "',";
        strVisitas = strVisitas + "" + 1 + ")";
        console.log('SQL',strVisitas)
        await consultas.myQuery(strVisitas).then(async resultado => {
            resultado = resultado.recordset;

            resolve('OK');

        }).catch(error => {
            resolve(error);
        });
    });
}

exports.strVisitas = function () {

    return new Promise(async function (resolve, reject) {

        let date = new Date();
        let correlador = date.getFullYear() + "" + (date.getMonth() + 1) + "" + date.getDate() + date.getHours() + "" + date.getMinutes() + "" + date.getSeconds();
        date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
        let total = 0;
        let strVisitas = "SELECT * FROM VISITAS";
        await consultas.myQuery(strVisitas).then(async resultado => {
            resultado = resultado.recordset;

            resolve('OK');

        }).catch(error => {
            resolve(error);
        });
    });
}