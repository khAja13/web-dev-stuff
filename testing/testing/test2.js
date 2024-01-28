const knex = require('knex')({
    client: 'mssql',
    connection: {
      host : 'localhost',
      port:1433,
      user : 'khajashaik',
      password : 'khajashaik',
      database : 'khajashaik'
    },
  });


knex.select('*').from('Persons')
  .then((person)=> {
  person.forEach(element => {
    console.log(element);
  }); 
}).catch((err) => console.log(err))
