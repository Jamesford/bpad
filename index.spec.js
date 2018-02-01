const bpad = require('./')

test('pads', () => {
  expect(bpad('test', 6)).toBe(' test ')
})
