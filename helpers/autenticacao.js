
const request = require('supertest');

const obterToken = async (usuario, senha) => {
    const response = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({ username: usuario, password: senha });

    return typeof response.body === 'string' ? response.body : response.body.token;
};
module.exports = { obterToken };