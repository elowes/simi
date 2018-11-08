import hash from '../src/hash'

test('hash', () => {
    expect(hash('hello world')).toEqual(1794106052)
})

test('hash2', () => {
    expect(hash('')).toEqual(0)
})