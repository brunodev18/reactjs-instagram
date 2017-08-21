const express = require('express')
const app = express()
const path = require('path')
const port = 3000
//Controllers
const authController = require(path.join(__dirname, 'app/controllers/authController.js'))(app)

//Middlewares
app.use(express.static('app'))
app.use(express.static('node_modules'))

/*
* ENDPOINTS
*/

//AUTH
app.get('/', authController.passport, (req, res) => res.redirect('/dash'))
app.get('/instagram/oauth', authController.authenticate, (req, res) => res.redirect('/dash'))

//VIEWS
app.get('/dash', authController.passport, (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

/*
* RUN SERVER
*/
app.listen(port, () => console.log(`Running at port ${port}`))
