const consultas = require("../utils/query");
exports.relojeriaIndex = async function (row) {
console.log('RelojeriaService',row)
    return new Promise(async function (resolve, reject) {

        let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
        strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) as PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
        strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
        strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA";
        let strReloj = "SELECT TOP("+ row +")" + strSql +" FROM CAYETANO_ARTI WHERE RELOJES='1' AND STOCK >0 AND PVENTA > 0";
        console.log('SQL',strReloj);
        await consultas.myQuery(strReloj).then(async resultado => {
            resultado = resultado.recordset;
            console.log(resultado);
            resolve(resultado);

        }).catch(error => {
            resolve(error);
        });
    });
}
exports.Search = async function (hombre,mujer,nino,nina, familia) {
console.log('Servicio',hombre,mujer,nino,nina);
    return new Promise(async function (resolve, reject) {

        let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
        strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) as PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
        strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
        strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA";
        let strReloj = "SELECT " + strSql +" FROM CAYETANO_ARTI WHERE RELOJES='1' AND STOCK >0 AND PVENTA > 0 AND HOMBRE=" + hombre + " AND MUJER=" + mujer + " AND NIÑO=" + nino + " AND NIÑA=" + nina;
        if(familia !== -1){
            strReloj = strReloj + " AND FAMILIA=" + familia
        }
        console.log('SQL',strReloj);
        await consultas.myQuery(strReloj).then(async resultado => {
            resultado = resultado.recordset;
            console.log(resultado);
            resolve(resultado);

        }).catch(error => {
            resolve(error);
        });
    });
}
exports.SearchDescription = async function (relojeria,hombre,mujer,nino,nina, familia, description) {
    console.log('Servicio','Relojeria',relojeria,'Hombre',hombre,'Mujer',mujer,'Niño',nino,'Niña',nina);
        return new Promise(async function (resolve, reject) {
    
            let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
            strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) as PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
            strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
            strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA";
            let strReloj = "SELECT " + strSql +" FROM CAYETANO_ARTI WHERE RELOJES='"+ relojeria +"' AND STOCK >0 AND PVENTA > 0 AND DESCRIP_CORTA LIKE '%" + description +"%'";
            console.log(strReloj);
            if( hombre === 1){
                strReloj = strReloj + " AND HOMBRE=" + hombre ;
            }
            if( mujer === 1){
                strReloj = strReloj + " AND mujer=" + mujer ;
            }
            if( nino === 1){
                strReloj = strReloj + " AND NIÑO=" + nino ;
            }
            if( nina === 1){
                strReloj = strReloj + " AND NIÑA=" + nina ;
            }
            
            if(familia !== 0){
                strReloj = strReloj + " AND FAMILIA=" + familia
            }
            console.log('SQL',strReloj);
            await consultas.myQuery(strReloj).then(async resultado => {
                resultado = resultado.recordset;
                ///console.log(resultado);
                resolve(resultado);
    
            }).catch(error => {
                resolve(error);
            });
        });
}
    exports.Search2 = async function (relojeria,hombre,mujer,nino,nina, familia) {
        console.log('Servicio','Relojeria',relojeria,'Hombre',hombre,'Mujer',mujer,'Niño',nino,'Niña',nina);
            return new Promise(async function (resolve, reject) {
        
                let strSql = "REFERENCIA,DESCRIP_CORTA,OBSERVACIONES,IMG,";
                strSql = strSql + "convert(decimal(10,2),round(((PVENTA - ((PVENTA * DTO) / 100))),2)) as PVENTA,STOCK,VISITADO,COMPRADO,RELOJES,ORO,";
                strSql = strSql + "PLATA,REGALOS_ESPECIALES,JOYERIA_FIRMA,EVENTOS,";
                strSql = strSql + "FAMILIA,ID,HOMBRE,MUJER,NIÑO,NIÑA";
                let strReloj = "SELECT " + strSql +" FROM CAYETANO_ARTI WHERE RELOJES='"+ relojeria +"' AND STOCK >0 AND PVENTA > 0";
                if( hombre === 1){
                    strReloj = strReloj + " AND HOMBRE=" + hombre ;
                }
                if( mujer === 1){
                    strReloj = strReloj + " AND mujer=" + mujer ;
                }
                if( nino === 1){
                    strReloj = strReloj + " AND NIÑO=" + nino ;
                }
                if( nina === 1){
                    strReloj = strReloj + " AND NIÑA=" + nina ;
                }
                
                if(familia !== 0){
                    strReloj = strReloj + " AND FAMILIA=" + familia
                }
                console.log('SQL',strReloj);
                await consultas.myQuery(strReloj).then(async resultado => {
                    resultado = resultado.recordset;
                    ///console.log(resultado);
                    resolve(resultado);
        
                }).catch(error => {
                    resolve(error);
                });
            });
        }
exports.relojeriasFamilias = async function (relojeria) {
    
        return new Promise(async function (resolve, reject) {
            let strSql;
    if(relojeria === 1){
         strSql = "select id,nombre from marca where reloj=1";
    }
    if(relojeria === 0){
         strSql = "select id,nombre from marca where JOYERIA=1";
    }
        
            
       
            await consultas.myQuery(strSql).then(async resultado => {
                resultado = resultado.recordset;
                console.log(resultado);
                resolve(resultado);
    
            }).catch(error => {
                resolve(error);
            });
        });
    }