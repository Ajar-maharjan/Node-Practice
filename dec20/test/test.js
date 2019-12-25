// var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var server = require("../index.js");
chai.use(chaiHttp);


// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3].indexOf(4), -1);
//     });
//   });
// });

describe('Users', function () {
  describe('POST user registration', function () {
    it('should register a user, provided unique username', function (done) {
      chai.request(server)
        .post('/registration')
        .set('content-type', 'application/x-www-form-urlencoded')
        .send({
          username: 'applaes',
          password: 'psddfdes123'
        })
        .end(function (err, res) {
          res.should.have.status(201);
          done();
        })
    })
  })
})