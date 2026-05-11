
const request = require('supertest');
const { expect } = require('chai');
<<<<<<< HEAD
const obterToken = require('../helpers/autenticacao');
=======
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
>>>>>>> 5cede85de46d5e7b222704f1a8a3f265b9ea9da7
const postTransferencias = require('../fixtures/postTransferencias.json');

describe    ('Transferencia', () => {
    describe('POST/ Transferencias', () => {

        it('Deve retornar status 201 e a transferência realizada com sucesso', async () => {
<<<<<<< HEAD
          const token = await obterToken('julio.lima', '123456');
          const bodyTransferencia = { ...postTransferencias, token, valor: 100.00 };

          const response = await request('http://localhost:3000')
            .post('/transferencias')
            .set('Content-Type', 'application/json')
            .send(bodyTransferencia);
=======
            const bodyTransferencias = {...postTransferencias, token: token };
            bodyTransferencias.valor = 7;
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);
>>>>>>> 5cede85de46d5e7b222704f1a8a3f265b9ea9da7
          expect(response.status).to.equal(201);
          console.log(response.body);
        });

            it ('Deve retornar falha com status 422 quando dados obrigatórios estão faltando', async () => {
              const token = await obterToken('julio.lima', '123456');
              const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .send({ 
                    contaOrigem: 1, 
                    contaDestino: 2, 
                    valor: 7.00
                });
              expect(response.status).to.equal(422);
              console.log(response.body);
            })
    })
})  