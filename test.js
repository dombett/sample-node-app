const app = require('./app');
const request = require('supertest');

describe('Test', () => {
    it('should return test data', (done) => {
        request(app).get('/test').expect(200, { data: 'test data' }, done);
    });
});
