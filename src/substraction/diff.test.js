const diff = require('./diff');

test('Substract 2 -1 = 1', () => {
  expect(diff(2, 1)).toBe(1);
});