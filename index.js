const express = require('express')
const app = express()
const path = require('path')
const auth = require(path.join(__dirname, 'app/modules/auth.js'))()
const port = 3000

app.use(express.static('app'))
app.use(express.static('node_modules'))

/*
* AUTH
*/

app.use('/instagram/oauth', (req, res) => {
    const code = req.query.code
    console.log(code)
})

/*
* ENDPOINTS
*/

app.get('/', [(req, res) => {
    auth.init()
    .then(result => res.redirect(result))//res.redirect(result))
    .catch(e => console.log(e))
}], (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

/*
* RUN SERVER
*/

app.listen(port, () => `Running at port ${port}`)
