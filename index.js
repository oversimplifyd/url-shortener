"use strict"

let express = require('express'),
    app = express(),
    customValidator = require('./utils/validator'),
    customError = require('./utils/error'),
    controller = require('./controller/url'),
    config = require('config'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    Url = require('./model/url'),
    options = {
        server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
        replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } }
    },
    port = process.env.PORT || 8000

mongoose.connect(config.DBHost, options)
console.log(config.DBHost)

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

if(config.util.getEnv('NODE_ENV') !== 'test') {
    app.use(morgan('combined'))
}

app.get('/', (req, res) => {
    res.send('Welcome to URL Shortener API');
})

app.get('/favicon.ico', (req, res) => {
    res.sendStatus(204);
});

app.get('/:urlKey(\\d{4})', (req, res) => {
    if (customValidator.validateUrlKey(req.params.urlKey)) {
        let urlKey = req.params.urlKey
        controller.findByKey(urlKey, data => {
          if (data)
            res.redirect(data.url)
          else
            res.json({error: 'We could not process your request'})
        })
    } else {
        res.json(customError.urlKeyError);
    }
})

app.get('/*', (req, res) => {
    if (customValidator.validateUrl(req.params[0])) {
      controller.findUrl(req.params.url, (data) => {
        if (data) {
          res.json({
              "original_url" : req.params[0],
              "short_url": config.HerokUrl + '/' + data.urlKey
          })
        } else {
          controller.findOrCreate(req.params[0], (urlKey) => {
            controller.createUrl(req.params[0], urlKey, (data) => {
              res.json({
                  "original_url" : req.params[0],
                  "short_url": config.HerokUrl + '/' + data.urlKey
              })
            })
          })
        }
      })
    } else {
        res.json(customError.urlError);
    }
})

app.listen(port)
console.log("Listening on port " + port)

module.exports = app
