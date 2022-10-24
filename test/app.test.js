const supertest = require('supertest');
const winston = require('winston/lib/winston/config');

const request = supertest('http://localhost:3000');

describe('Testes de Integração', () => {

  const autorIntegrationTest = {
      nome: "autorIntegrationTest",
      email: "autorIntegrationTest@gmail.com",
      telefone: "19999999999"
  }

  test('Criar Autor', async () => {
    const res = await request
      .post('/Autor')
      .send(autorIntegrationTest)
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(autorIntegrationTest);
    autorIdCriado = res.body.autorId;
  });

  test('Consultar Autor criado no banco', async () => {
    const res = await request
      .get(`/Autor/${autorIdCriado}`)
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject(autorIntegrationTest);
  });

  

  test('Criar Livro', async () => {
    const livroIntegrationTest = {
      nome: "livroIntegrationTest",
      valor: 100.00,
      estoque: 10,
      autorId: autorIdCriado
    }
    const res = await request
      .post('/Livro')
      .send({
        nome: "livroIntegrationTest",
        valor: 100.00,
        estoque: 10,
        autorId: autorIdCriado
      })
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      nome: "livroIntegrationTest",
      valor: "100",
      estoque: 10,
      autorId: autorIdCriado
    });
    livroIdCriado = res.body.livroId;
  });

  test('Consultar Livro criado no banco', async () => {
    const livroIntegrationTest = {
      nome: "livroIntegrationTest",
      valor: 100.00,
      estoque: 10,
      autorId: autorIdCriado
    }
    const res = await request
      .get(`/Livro/${livroIdCriado}`)
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      nome: "livroIntegrationTest",
      valor: "100",
      estoque: 10,
      autorId: autorIdCriado
    });
  });

  const clienteIntegrationTest = {
    nome: "clienteIntegrationTest",
    email: "clienteIntegrationTest@gmail.com",
    senha: "clienteIntegrationTestPwd",
    telefone: "19999999999",
    endereco: "Rua do Cliente Integration Test, n. 999"
  }

test('Criar Cliente', async () => {
  const res = await request
    .post('/Cliente')
    .send(clienteIntegrationTest)
  expect(res.status).toBe(200);
  expect(res.body).toMatchObject(clienteIntegrationTest);
  clienteIdCriado = res.body.clienteId;
});

test('Consultar Cliente criado no banco', async () => {
  const res = await request
    .get(`/Cliente/${clienteIdCriado}`)
  expect(res.status).toBe(200);
  expect(res.body).toMatchObject(clienteIntegrationTest);
});

// test('Buscar Livro com Credenciais do Usuario Criado', async () => {
//   const res = await request
//     .get(`/Livro/${livroIdCriado}`)
//   expect(res.status).toBe(200);
//   expect(res.body).toMatchObject(clienteIntegrationTest);
// });

test('Criar Venda com credenciais do usuário criado, comprando livro criado', async () => {
  const vendaIntegrationTest = {
    valor: 55.60,
    data: '2022-10-10',
    clienteId: clienteIdCriado,
    livroId: livroIdCriado,
  }
  const res = await request
    .post('/Venda')
    .send(vendaIntegrationTest)
  expect(res.status).toBe(200);
  expect(res.body).toMatchObject(vendaIntegrationTest);
  vendaIdCriado = res.body.vendaId;
});


// test('Deletar Venda criada no banco', async () => {  
//   const res = await request
//     .delete(`/Venda/${vendaIdCriado}`)
//   expect(res.status).toBe(200);
// });

// test('Deletar Livro criado no banco', async () => {  
//     const res = await request
//       .delete(`/Livro/${livroIdCriado}`)
//     expect(res.status).toBe(200);
// });

// test('Deletar Autor criado no banco', async () => {  
//   const res = await request
//     .delete(`/Autor/${autorIdCriado}`)
//   expect(res.status).toBe(200);
// });

// test('Deletar Cliente criado no banco', async () => {  
//   const res = await request
//     .delete(`/Cliente/${clienteIdCriado}`)
//   expect(res.status).toBe(200);
// });

})


