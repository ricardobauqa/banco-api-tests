
const request = require('supertest');
<<<<<<< HEAD
const postLogin = require('../fixtures/postLogin.json');

const obterToken = async (usuario, senha) => {
    const bodyLogin = { ...postLogin, username: usuario, password: senha };
    const response = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin);

=======
const { expect } = require('chai');
const postLogin = require('../fixtures/postLogin.json');
const obterToken = async (usuario, senha) => {
const bodyLogin = {...postLogin, username: usuario, password: senha };
const response = await request('http://localhost:3000')
        .post('/login')
        .set('Content-Type', 'application/json')
        .send(bodyLogin);   
>>>>>>> 5cede85de46d5e7b222704f1a8a3f265b9ea9da7
    return typeof response.body === 'string' ? response.body : response.body.token;
};
module.exports = obterToken;