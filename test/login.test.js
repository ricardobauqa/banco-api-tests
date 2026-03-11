const request = require('supertest');
const expect = require('chai').expect;

describe ('Login', () => {
    describe('POST /login', () => {
        it('should return 200 and a token if the credentials are correct', async () => {
            const response = await request('http://localhost:3000')
                .post('/login')
                .set('Content-Type', 'application/json')
                .send({ username: 'juio.lima', password: '123456' });
            expect(response.status).to.equal(200);
            expect(response.body).to.be.a('string');
        });
    });
});