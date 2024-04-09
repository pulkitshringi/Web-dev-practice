const { faker } = require('@faker-js/faker');
let getRandomUser = ()=>{
    return [
         faker.string.uuid(),
         faker.internet.userName(),
         faker.internet.email(),
        faker.internet.password()
    ];
    }
    const mysql = require('mysql2');
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'delta_app',
      password: 'admin@123'
    });
    let q = "INSERT INTO user(id,username,email,password) VALUES ?";
    let users = [];
    for(let i =0;i<100;i++){
      users.push(getRandomUser());
    }
    try{
    connection.query(q,[users],(err,result)=>{
    if(err) throw err;
    console.log(result);                                                     
    })
    }
    catch(err){
    console.log(err)
    } 
    connection.end();