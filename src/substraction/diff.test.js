const sum = require('./diff');

test('Substract 2 -1 = 1', () => {
  expect(sum(2, 1)).toBe(1);
});