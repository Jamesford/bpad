const bpad = require('./')

test('basic padding', () => {
  expect(bpad('foobar', 8)).toBe(' foobar ')
})

test('doesn\'t pad when length is same as string', () => {
  expect(bpad('foobar', 6)).toBe('foobar')
})

test('pads with a custom character', () => {
  expect(bpad('foobar', 8, '*')).toBe('*foobar*')
})

test('uneven pads add extra char on the right', () => {
  expect(bpad('foobar', 9, '*')).toBe('*foobar**')
})

test('uneven pads can be set to add extra char on the left', () => {
  expect(bpad('foobar', 9, '*', true)).toBe('**foobar*')
})
