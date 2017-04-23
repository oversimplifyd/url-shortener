"use strict";

let validator = require('validator'),
    CustomValidator = {
        validateUrl: function(url) {
            return validator.isURL(url, {
                protocols: ['http','https']
            });
        },
        validateUrlKey: function(key) {
            return validator.isInt(key, {
                allow_leading_zeroes: false
            });
        }
    };

module.exports = CustomValidator;
