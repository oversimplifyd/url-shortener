"use strict";

let mongoose = require('mongoose'),
    keyGenerator = require('../utils/generatekey'),
    Schema = mongoose.Schema,
    UrlSchema;

    UrlSchema = new Schema(
    {
        url: { type: String, required: true },
        urlKey: { type: Number, required: true }
    },
    {
        versionKey: false,
        timestamps: { createdAt: 'created_at' }
    }
  );

  UrlSchema.statics.checkKeyExists = function(uniqueKey, cb) {
    this.findOne({urlKey: uniqueKey}, (err, data) => {
      if (err)
          return cb(err);
      if (data)
          return cb(undefined, true);
      return cb(undefined, false);
    });
  }

  UrlSchema.statics.generatekey = keyGenerator;

module.exports = mongoose.model('url', UrlSchema);
