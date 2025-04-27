// Import modules
const express = require("express")


// Define server variables
const server = express()
const port = 3030


// Set render engine
server.set("view engine", "")

// Start listening for connections
server.listen(port, function () {
    console.log("[Server]", "Server started on port", port)
    console.log("[Server]", "Now listening..")
})
