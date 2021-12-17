const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/user/by-uid", (request, response) => {
    database.connection.query(
        `select * from users where username = '${request.query.username}'`,
        (errors, results) => {
            if (errors) {
                console.log(errors);
                response.status(500).send("Internal Server Error");
            } else {
                response.status(200).send(results);
            }
        }
    );
});

module.exports = {
    router,
};
