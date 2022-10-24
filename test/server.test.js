const supertest = require('supertest');

const request = supertest('http://localhost:3000');

test('Servidor escutando na porta 3000', async () => {
  const resposta = await request.get('/');
  expect(resposta.status).toBe(200);
});

test('Endpoint Cliente', async () => {
    const resposta = await request.get('/Cliente');
    expect(resposta.status).toBe(200);
  });

test('Endpoint Autor', async () => {
    const resposta = await request.get('/Autor');
    expect(resposta.status).toBe(200);
  });

test('Endpoint Livro', async () => {
    const resposta = await request.get('/Livro');
    expect(resposta.status).toBe(200);
  });

test('Endpoint Venda', async () => {
    const resposta = await request.get('/Venda');
    expect(resposta.status).toBe(200);
  });
