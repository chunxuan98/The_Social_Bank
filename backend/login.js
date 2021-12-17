const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/login", (request, response) => {
    database.connection.query(`select * from users where username = "${request.query.uid}" and password = "${request.query.pwd}"`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Server Error");
        } else {
            response.status(200).send(results);
        }
    });
});


module.exports = {
    router,
};
