const path = require('path')
const Promise = require('bluebird')
const request = require('request')
const config = require(path.join(__dirname, '../modules/config.js'))
const session = require('express-session')

module.exports = (app) => {

    //Session middleware
    app.use(session(config.SessionParams))

    //Auth's URL
    let url = 'https://api.instagram.com/oauth/authorize/?'
    url += `client_id=${config.InstagramParams.client_id}`
    url += `&redirect_uri=${config.InstagramParams.redirect_uri}`
    url += '&response_type=code'

    return {
        //Verify if user is logged in
        passport: (req, res, next) => {
            if ( !req.session.access_token && !req.session.user ) return res.redirect(url)
            
            next()
        },

        //Setting session data
        authenticate: (req, res, next) => {
            const code = req.query.code

            return new Promise((resolve, reject) => {
                request.post({url: 'https://api.instagram.com/oauth/access_token', form: {
                    client_id: config.InstagramParams.client_id,
                    client_secret: config.InstagramParams.client_secret,
                    grant_type: 'authorization_code',
                    redirect_uri: config.InstagramParams.redirect_uri,
                    code: code
                }}, (err, response, body) => {
                    if (err) reject(err)
                    //Convert the response in JSON
                    //Save data in the req.session object
                    const result = JSON.parse(body)
                    const access_token = result.access_token
                    const user = result.user

                    req.session.access_token = access_token
                    req.session.user = user

                    if ( req.session.access_token && req.session.user ) resolve(next())
                })
            })
        }
    }
}