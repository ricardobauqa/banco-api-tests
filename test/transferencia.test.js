const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe    ('Transferencia', () => {
    describe('POST/ Transferencias', () => {
        let token;
        beforeEach(async () => {
            token = await obterToken("julio.lima", "123456");
        });
        it('Deve retornar status 201 e a transferência realizada com sucesso', async () => {
            const bodyTransferencias = {...postTransferencias, token: token };
            bodyTransferencias.valor = 7;
            const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send(bodyTransferencias);
          expect(response.status).to.equal(201);
          console.log(response.body);
        });

            it ('Deve retornar falha com status 422 quando dados obrigatórios estão faltando', async () => {
               const token = await obterToken("julio.lima", "123456");
              const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
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