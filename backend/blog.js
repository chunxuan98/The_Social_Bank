const database = require("./database");
const express = require("express");

router = express.Router();

router.get("/blogs/all", (request, response) => {
    database.connection.query(`select *
                               from Blog_Posts`, (errors, results) => {
        if (errors) {
            console.log(errors);
            response.status(500).send("Internal Server Error");
        } else {
            response.status(200).send(results);
        }
    });
});

router.get("/blogs/bycat", (request, response) => {
    database.connection.query(`select * from Blog_Posts where Category = "${request.query.cat}"`, (errors, results) => {
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
