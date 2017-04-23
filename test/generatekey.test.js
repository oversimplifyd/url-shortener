'use strict'

let expect = require('chai').expect,
    generatekey = require('../utils/generatekey');

describe('GenerateKey', function(){
  it('Should be a number', function(){
    expect(generatekey(4)).to.be.a('number');
  });
  
  it('Should have length of 4', function(){
    expect(String(generatekey(4))).to.have.lengthOf(4);
  });
});
