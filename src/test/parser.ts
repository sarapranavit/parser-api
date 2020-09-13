import chai from 'chai';
import chaiHttp = require('chai-http');
let server = require('../app/index');

chai.use(chaiHttp);

chai.should();

const postPayload = {
    data: "JHON0000MICHAEL0009994567"
} 

describe('Parser Post API Request', () => {
    it('- Should return 404 Error: When Request URL is Invalid', (done) => {
        chai.request(server)
        .post("/api/v1/invalid")
        .send(postPayload)
        .end((err, response) => {
            response.should.have.status(404);
            done();
        });
    })

    it('- Should return 400 BadRequest: When Post request payload is Empty', (done) => {
        chai.request(server)
        .post("/api/v1/parse")
        .send({})
        .end((err, response) => {
            response.should.have.status(400);
          done();
        });
    })

    it('- Should return 400 BadRequest: When Post request payload is invalid format', (done) => {
        const postPayload = {
            data: "JonnMichel999567"
        } 
        chai.request(server)
        .post("/api/v1/parse")
        .send(postPayload)
        .end((err, response) => {
            response.should.have.status(400);
          done();
        });
    })

    it('+ Should return 200 success: when the request payload is valid format ', (done) => {
        chai.request(server)
        .post("/api/v1/parse")
        .send(postPayload)
        .end((err, response) => {
            response.should.have.status(200);
          done();
        });
    })

})