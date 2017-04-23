'use strict'

let expect = require('chai').expect,
    Url = require('../model/url');

describe('UrlPropertyValidation', function(){
  describe(('#urlKey'), function(){
    it('Should be invalid if UrlKey is empty', function(done){
      let newUrl = new Url();
      newUrl.validate(function(err){
        expect(err.errors.urlKey).to.exist;
        done();
      });
    });

  it('Should be invalid if UrlKey is not a number', function(done){
    let newUrl = new Url();
    newUrl.urlKey = 'dfdadf';
    newUrl.validate(function(err){
      expect(err.errors.urlKey).to.exist;
      done();
    });
  });
});

  describe(('#url'), function(){
    it('Should be invalid if Url is empty', function(done){
      let newUrl = new Url();
      newUrl.validate(function(err){
        expect(err.errors.url).to.exist;
        done();
      });
    });
});

describe(('#imestamp'), function(){
  it('Should have timestamp', function(done){
    let newUrl = new Url();
    newUrl.validate(function(err){
      expect(err.errors.timestamps).to.not.exist;
      done();
    });
  });
});
});
