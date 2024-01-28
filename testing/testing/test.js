var express = require('express');
var app = express();

app.get('/', function (req, res) {
   
    var knex = require("knex");

    var config = {
        user: 'khajashaik',
        password: 'khajashaik',
        server: 'localhost', 
        database: 'khajashaik'  ,
        trustServerCertificate: true
    };

    knex({ a: 'Persons' })
        .select({
            aTitle: 'a.LastName',
            bTitle: 'b.FirstName'
        })

    // sql.connect(config, function (err) {
    
    //     if (err) console.log(err);

    //     // create Request object
    //     var request = new sql.Request();

    //     // query to the database and get the records
    //     request.query('select * from Persons', function (err, recordset) {
            
    //         if (err) console.log(err)

    //         // send records as a response
    //         res.send(recordset);
            
    //     });
    // });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});