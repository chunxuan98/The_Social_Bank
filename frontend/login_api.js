const mysql = require("mysql");
var someVar = [];
parameters = {
host: "137.132.92.94",
user: "fintechlab",
password: "FinTechLab",
port: 12865,
database: 'gurby5'
};

let connection = mysql.createConnection(parameters);

connection.connect((errors) => {
    if (errors) {
        console.log(errors);
    }
    else {
        console.log('Connected')
    }
})

// connection.query(`SELECT * FROM MOCK_DATA WHERE Username = 'elarciere0' AND Password = 'TQAomL8'`, (err, res) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(res)
//     }
// })

module.exports = connection;