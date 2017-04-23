'use strict'

let expect = require('chai').expect,
    customValidator = require('../utils/validator');

describe('CustomValidator', function(){
  describe('#UrlValidator', function(){
    it('Should be a valid Url', function(){
      expect(customValidator.validateUrl('https://google.com/293?a=b&c=d')).to.be.true;
    });

    it('Should not be a valid url', function(){
      expect(customValidator.validateUrl('hatp://google.com')).to.be.false;
    });
  });

  describe('#UrlKeyValidator', function(){
    it('Should be a valid integer', function(){
      expect(customValidator.validateUrlKey('2343')).to.be.true;
    });

    it('Should not be a valid integer', function(){
      expect(customValidator.validateUrlKey('23ac43')).to.be.false;
    });

    it('Should not allow leading zeroes', function(){
      expect(customValidator.validateUrlKey('002343')).to.be.false;
    });

  });
});
