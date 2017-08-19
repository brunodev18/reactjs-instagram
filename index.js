const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static('app'))
app.use(express.static('node_modules'))

app.get ('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')))

app.listen(port, () => `Running at port ${3000}`)
