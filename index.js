const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const request = require('request')
const config = require(path.join(__dirname, 'app/modules/config.js')).Config
//Controllers
const authController = require(path.join(__dirname, 'app/controllers/authController.js'))()

//Middlewares
app.use(express.static('app'))
app.use(express.static('node_modules'))

/*
* AUTH
*/

app.get('/instagram/oauth', (req, res) => {
    const code = req.query.code
    
    request.post({url: 'https://api.instagram.com/oauth/access_token', form: {
        client_id: config.client_id,
        client_secret: config.client_secret,
        grant_type: 'authorization_code',
        redirect_uri: config.redirect_uri,
        code: code
    }}, (err, response, body) => {
        if (err) throw err

        console.log(body)
    })
})

/*
* ENDPOINTS
*/

app.get('/', 
    (req, res) => {
        authController.authenticate()
        .then(result => res.redirect(result))
        .catch(e => console.log(e))}
, (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

/*
* RUN SERVER
*/

app.listen(port, () => `Running at port ${port}`)
