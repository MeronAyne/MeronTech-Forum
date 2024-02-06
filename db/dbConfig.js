const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
    user:"Forum-admin",
    database: "Forum-db",
    host:"localhost",
    password:"forum24",
    port: 8889,
    connectionLimit:10
})

dbConnection.execute("select 'Mukera' ", (err, result) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(result)
    }
})