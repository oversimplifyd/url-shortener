'use strict';

let Url = require('../model/url'),
    generateId = require('../utils/generatekey'),
    UrlController = Object.create(null)

UrlController.findOrCreate = (url, cb) => {
    let urlKey = Url.generatekey(4)

    Url.checkKeyExists(urlKey, (err, keyExists) => {
      if (err)
          throw err

      if (keyExists) {
        return findOrCreate(url)
        console.log('find or creating')
      } else {
        console.log('Creating Url..')
        cb(urlKey)
      }
    })
}

UrlController.findByKey = (key, cb) => {
    // finds a url by its associated key
    Url.findOne({urlKey: key}, (err, data) => {
        if (err)
          throw err
        return cb(data)
    })
}

UrlController.createUrl = (url, key, cb) => {
    let newUrl = new Url({
        url: url,
        urlKey: key
    })

    newUrl.save((err, data) => {
        if (err) throw err
        return cb(data)
    })
}

UrlController.findUrl = (url, cb) => {
  Url.findOne({url: url}, (err, data) => {
      if (err)
        throw err
      return cb(data)
  })
}

module.exports = UrlController
