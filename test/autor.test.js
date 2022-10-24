const supertest = require('supertest');

const request = supertest('http://localhost:3000');

test('Criar Autor', async () => {
  const resposta = await request.post('/Autor');
  expect(resposta.status).toBe(200);
});

test('Verificar Autor Criado', async () => {
  const resposta = await request.post('/Autor');
  expect(resposta.status).toBe(200);
});
