const calc = require('./Calculadora')

const calculadora = new calc

test('verificar se a soma está funcionado', () => {
  expect(calculadora.soma(10, 20)).toBe(30)
})

test('verificar se subtracao esta funcionando', () => {
  expect(calculadora.sub(10, 20)).toBe(-10)
})