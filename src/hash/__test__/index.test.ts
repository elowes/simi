import hash from '../index'

test('hash', () => {
    expect(hash('hello world')).toEqual(1794106052)
})