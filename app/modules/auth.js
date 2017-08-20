const path = require('path')
const request = require('request')
const tmp = require('tmp')
const fs = require('fs')
const Promise = require('bluebird')
const config = require(path.join(__dirname, 'config.js')).Config

module.exports = () => {    

    let url = 'https://api.instagram.com/oauth/authorize/?'
    url += `client_id=${config.client_id}`
    url += `&redirect_uri=${config.redirect_uri}`
    url += '&response_type=code'
    
    return {
        init: () => {
            return new Promise((resolve, reject) => {
                resolve(url)
            })
        }
    }
}