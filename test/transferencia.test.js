const request = require('supertest');
const { expect } = require('chai');
const obterToken = require('../helpers/autenticacao');
const postTransferencias = require('../fixtures/postTransferencias.json');

describe('Transferencia', () => {
  describe('POST/ Transferencias', () => {
    it('Deve retornar status 201 e a transferência realizada com sucesso', async () => {
      const token = await obterToken('julio.lima', '123456');
      const bodyTransferencias = { ...postTransferencias, valor: 100.00 };

      const response = await request('http://localhost:3000')
        .post('/transferencias')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${token}`)
        .send(bodyTransferencias);

      expect(response.status).to.equal(201);
      console.log(response.body);
    });

    it('Deve retornar falha com status 422 quando valor for menor que o permitido', async () => {
      const token = await obterToken('julio.lima', '123456');
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
    });
  });

  describe('GET/ Transferencias/ID', () => {
    it('Deve retornar status 200 e os detalhes da transferência', async () => {
      const token = await obterToken('julio.lima', '123456');
      const response = await request('http://localhost:3000')
        .get('/transferencias/1')
        .set('Authorization', `Bearer ${token}`);

      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(1);
      
      console.log(response.status);
      console.log(response.body);
    });

    describe('GET/ Transferencias', () => {
      it('Deve retornar 10 elementos na paginação', async () => {
        const token = await obterToken('julio.lima', '123456');
        const response = await request('http://localhost:3000')
          .get('/transferencias?page=1&limit=10')
          .set('Authorization', `Bearer ${token}`);

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('object');
        expect(response.body.transferencias).to.be.an('array').that.has.lengthOf(10);

        console.log(response.status);
        console.log(response.body);
      });
    });
  });
});