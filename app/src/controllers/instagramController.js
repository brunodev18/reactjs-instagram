const request = require('request')
const path = require('path')
const config = require(path.join(__dirname, '../modules/config.js'))
const session = require('express-session')

module.exports = (app) => {
    
    //Session middleware
    app.use(session(config.SessionParams))
    //Request url
    const url = 'https://api.instagram.com/v1'

    return {

        /*
        * USERS
        */

        //Returns yourself profile data
        getYourself: (req, res) => {
            const access_token = req.session.access_token

            request(`${url}/users/self/?access_token=${access_token}`, (err, response, body) => {
                if (err) throw err

                res.send(body)
            })
        },

        //Returns yourself media
        getYourselfMedia: (req, res) => {
            const access_token = req.session.access_token

            request(`${url}/users/self/media/recent/?access_token=${access_token}`, (err, response, body) => {
                if (err) throw err
                
                res.send(body)
            })
        }
    }
}