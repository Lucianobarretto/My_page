const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,    /* atenção, esta opção posso usar quando tenho tags html dentro do nunjucks! para imprimir em tela! */
    noCache: true
})

server.listen(5000, function() {
    console.log("server is running")
})