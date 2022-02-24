var sql = require('mssql'); // MS Sql Server client
var sqlConfig = {
  user: 'Orel',
  password: 'M@rtina14052018',
  server: 'orelcenter.database.windows.net',
  database: 'Orelito',
  port: 1433,
  dialect: "mssql",
  options: {
    encrypt: true ,
    enableArithAbort: true
  }


}

async function myQuery(strsql) {
/*   console.log('dentrode myQuery');
  console.log('query solicitada', strsql); 
  
  */
  var resul;
  await sql.connect(sqlConfig).then( async strResult => {
/*     console.log('query solicitada2', strResult) */
    var request = new sql.Request();
    
    resul = await request.query(strsql).then(reqResult =>{
  /*     console.log('reqResult',reqResult); */
      this.result = reqResult;
      return(reqResult);
    }).catch(reqError =>{
      console.log('Error',reqError);
    });
 /*    console.log('hola',resul) */
    return this.resul;
  }).catch( sqlError=>{
    console.log('sqlError', sqlError);
  });
  return (resul)
}
exports.myQuery = myQuery;