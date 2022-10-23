const calculaValor = require('../src/calcula-valor.js')
require('./extensoes.js')

describe('calcularMontante', () => {
  test('Com uma prestação, o montante é igual ao capital', () => {
    // Operação
    const montante = calculaValor.calcularMontante(100, 0.0175, 1)

    // Resultado Esperado
    expect(montante).toBe(100)
  })

  test('Com uma prestação, o montante é igual ao capital', () => {
    // Operação
    const montante = calculaValor.calcularMontante(500, 0.025, 4)

    // Resultado Esperado
    expect(montante).toBe(538.45)
  })
})

describe('arredondar', () => {
  test('Arredondar em 02 casas decimais', () => {
    const resultado = calculaValor.arredondar(538.4453124999998)
    expect(resultado).toBe(538.45)
  })

  test('1.005 deve retornar 1.01', () => {
    const resultado = calculaValor.arredondar(1.005)
    expect(resultado).toBe(1.01)
  })
})

describe('calcularPrestacoes', () => {
  test('O número de parcelas é igual ao número de prestações', () => {
    // Premissas
    const numeroPrestacoes = 6

    // Operação
    const prestacoes = calculaValor.calcularPrestacoes(200, numeroPrestacoes)

    // Resultado Esperado
    expect(prestacoes.length).toBe(numeroPrestacoes)
  })

  test('Uma única prestação, valor igual ao montante', () => {
    const numeroPrestacoes = 1

    const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes[0]).toBe(50)
  })

  test('Uma única prestação, valor igual ao montante', () => {
    const numeroPrestacoes = 1

    const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes[0]).toBe(50)
  })

  test('Duas Prestações, valor igual à metado do montante', () => {
    const numeroPrestacoes = 2

    const prestacoes = calculaValor.calcularPrestacoes(50, numeroPrestacoes)

    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes[0]).toBe(25)
    expect(prestacoes[1]).toBe(25)
  })

  test('Valor da soma das prestações, deve ser igual ao montante com 02 casas decimais', () => {
    const numeroPrestacoes = 3
    const montante = 100

    const prestacoes = calculaValor.calcularPrestacoes(montante, numeroPrestacoes)

    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes).tenhaSomaDeValoresIgual(montante)
    expect(prestacoes).sejaDecrescente()

    // for (let i = 0; i < prestacoes.length - 1; i++) {
    //   const j = i + 1
    //   expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j])
    // }
  })

  test('Desafio semi-final', () => {
    const numeroPrestacoes = 3
    const montante = 101.994

    const prestacoes = calculaValor.calcularPrestacoes(montante, numeroPrestacoes)

    expect(prestacoes.length).toBe(numeroPrestacoes)
    expect(prestacoes).tenhaSomaDeValoresIgual(montante)

    for (let i = 0; i < prestacoes.length - 1; i++) {
      const j = i + 1
      expect(prestacoes[i]).toBeGreaterThanOrEqual(prestacoes[j])
    }
  })
})