const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const bodyParser = require('body-parser')

//Controllers
const authController = require(path.join(__dirname, 'app/src/controllers/authController.js'))(app)
const instagramController = require(path.join(__dirname, 'app/src/controllers/instagramController.js'))(app)

//Middlewares
app.use(express.static('app/assets'))
app.use(express.static('app/dist'))
app.use(express.static('node_modules'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

/*
* ENDPOINTS
*/

//AUTH
app.get('/', authController.passport, (req, res) => res.redirect('/dashboard'))
app.get('/instagram/oauth', authController.authenticate, (req, res) => res.redirect('/dashboard'))

//VIEWS
app.get('/dashboard', authController.passport, (req, res) => res.sendFile(path.join(__dirname, 'app/src/views/index.html')))

//REQUESTS


//USERS
//=> Get yourself profile data
app.post('/instagram/users/self', authController.passport, instagramController.getYourself)
//=> Get yourself media
app.post('/instagram/users/self/media', authController.passport, instagramController.getYourselfMedia)

/*
* RUN SERVER
*/
app.listen(port, () => console.log(`Running at port ${port}`))
