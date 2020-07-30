const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/home")
})

routes.get('/home', function(req, res) {
    return res.render("home/index")
})

routes.get('/portifolio', function(req, res) {
    return res.render("portifolio")
})

routes.get('/certificate', function(req, res) {
    return res.render("certificate")
})

module.exports = routes