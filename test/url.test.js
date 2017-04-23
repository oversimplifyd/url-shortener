"use strict"

process.env.NODE_ENV = 'test';

let mongoose = require("mongoose"),
    Url = require('../model/url'),
    chai = require('chai'),
    chaiHttp = require('chai-http'),
    server = require('../index'),
    should = chai.should();

//Middleware
chai.use(chaiHttp);

describe('Urls', () => {
    beforeEach((done) => { //Before each test we empty the database - Hoo
        Url.remove({}, (err) => {
           done();
        });
    });

  describe('/GET url', () => {
      it('it should GET the shortened url', (done) => {
        chai.request(server)
            .get('/stackoverflow.com')
            .end((err, res) => {
                res.should.have.status(200);
              done();
            });
      });
  });

});
