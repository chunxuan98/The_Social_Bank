// import express to create backend service
const express = require("express");
// import body-parser to parse incoming requests
const bodyParser = require("body-parser");
// import cors to allow running server and client on the same system
const cors = require("cors");

// Import the code from user, account and transaction
const transaction = require("./transactions");
const blogs = require("./blog");
const login = require("./login")
const user = require("./user")
const chatroom = require("./chatrooms")

// create a service object which will listen to clients' requests
service = express();
// Tell the service to use JSON parser to parse requests.
service.use(bodyParser.json());
// Tell the service to use cors.
service.use(cors());

// Import API path mappings from transaction.js
service.use(transaction.router);
service.use(blogs.router);
service.use(login.router)
service.use(user.router)
service.use(chatroom.router)

// Start the service at port number 3000
service.listen(3000);
