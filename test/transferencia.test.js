const request = require('supertest');
const { expect } = require('chai');
require('dotenv').config();
const { obterToken } = require('../helpers/autenticacao');

describe    ('Transferencia', () => {
    describe('POST/ Transferencias', () => {
        it('Deve retornar status 201 e a transferência realizada com sucesso', async () => {
           const response = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
            valor: 70.00,
            token: '123456'
                });
          expect(response.status).to.equal(201);
          console.log(response.body);
        });

            it ('Deve retornar falha com status 422 quando dados obrigatórios estão faltando', async () => {
               const token = await obterToken("julio.lima", "123456");
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