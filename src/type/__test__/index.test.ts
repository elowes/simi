import type from '../index'

it('test null', () => {
  expect(type(null)).toBe('null')
})

it('test undefined', () => {
  expect(type(undefined)).toBe('undefined')
})

it('test array', () => {
  expect(type([])).toBe('array')
})

it('test number', () => {
  expect(type(123)).toBe('number')
})

it('test object', () => {
  expect(type({})).toBe('object')
})

it('test symbol', () => {
  expect(type(Symbol())).toBe('symbol')
})

it('test string', () => {
  expect(type('hello')).toBe('string')
})