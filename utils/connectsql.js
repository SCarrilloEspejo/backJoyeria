var Connection = require('tedious').Connection;  
var config = {  
    server: 'mssql.regalajoyas.com',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'Orel', //update me
            password: 'M@rtina14052018'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: 'Orelito'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.  
    console.log("Connected");  
    
});  

var Request = require('tedious').Request;  
var TYPES = require('tedious').TYPES;  

async function myQuery(strSql) {  
    console.log('SQL Connect',strSql);
    request = new Request(strSql, function(err) {  
    if (err) {  
        console.log(err);}  
    });  
    var result = "";  
    

   /*  request.on('done', function(rowCount, more) {  
    console.log(rowCount + ' rows returned');  
    });   */
    await connection.execSql(request);  
    return new Promise(async function (resolve, reject) {
        let myArrya = [];
        await request.on('row', function(columns) { 
       
            columns.forEach(function(column) { 
         
              if (column.value === null) {  
                console.log('NULL');  
              } else {  
                result+= column.value + " ";  
              }  
            });  
            console.log('3');
            console.log(result);  
            myArrya.push(result);
          
        });  
        resolve(myArrya);
        
    });
}  
exports.myQuery = myQuery;