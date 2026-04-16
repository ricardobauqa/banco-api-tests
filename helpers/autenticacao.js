
const request = require('supertest');
const { expect } = require('chai');
const postLogin = require('../fixtures/postLogin.json');
const obterToken = async (usuario, senha) => {
const bodyLogin = {...postLogin, username: usuario, password: senha };
const response = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin);   
    return typeof response.body === 'string' ? response.body : response.body.token;
};
module.exports = { obterToken };