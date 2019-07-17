const convertVanityToNumbers = require('./part1');

test('convertVanityToNumbers function exists', () => {
  expect(convertVanityToNumbers).toBeDefined();
});

// validate that output is 10 numbers with +1 prefix
test('output is 10 numbers and +1, no letters', () => {
  const test = '365-windows';
  expect(convertVanityToNumbers(test)).toMatch(/^\+([0-9]){10}[0-9]$/);
});

test('output contains no letters, matches regex', () => {
  const test = '365-windows';
  expect(convertVanityToNumbers(test)).toMatch(/^[^a-zA-Z]+$/);
});

test("output contains letters, doesn't match regex", () => {
  expect('365-windows').not.toMatch(/^[^a-zA-Z]+$/);
});

// validate that numbers correspond with correct letters
test('output numbers match corresponding keypad keys', () => {
  const test = '365-windows';
  expect(convertVanityToNumbers(test)).toMatch('+13659463697');
});

test('output numbers do not match corresponding keypad keys', () => {
  const test = '365-linux04';
  expect(convertVanityToNumbers(test)).not.toMatch('+13659463697');
});

// validate it is not case sensitive
test('is not case sensitive', () => {
  const test = '365-WINDowS';
  expect(convertVanityToNumbers(test)).toMatch('+13659463697');
});
