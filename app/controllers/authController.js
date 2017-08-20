const path = require('path')
const Promise = require('bluebird')
const config = require(path.join(__dirname, '../modules/config.js')).Config

module.exports = () => {

    //Auth's URL
    let url = 'https://api.instagram.com/oauth/authorize/?'
    url += `client_id=${config.client_id}`
    url += `&redirect_uri=${config.redirect_uri}`
    url += '&response_type=code'

    return {
        authenticate: () => {
            return new Promise((resolve, reject) => {
                resolve(url)
            })
        },

        passport: (code) => {
            return new Promise((resolve, reject) => {
                client.getAsync(code)
                .then(result => resolve(result))
                .catch(err => reject(err))
            })
        }
    }
}