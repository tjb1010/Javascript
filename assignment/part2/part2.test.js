const vanitySuggestions = require('./part2');

test('vanitySuggestions function exists', () => {
  expect(vanitySuggestions).toBeDefined();
});

// test('returns an array', () => {
//   const test = 256252437;
//   const runFunc = vanitySuggestions(test);
//   expect(Array.isArray(runFunc)).toBeTruthy();
// });
test('234 returns ["beg"]', () => {
  const test = 234;
  const runFunc = vanitySuggestions(test);
  expect(runFunc).toBe(['beg']);
});

test("won't accept less than 3 digits", () => {
  const test = 12;
  expect(vanitySuggestions(test)).toBeUndefined();
});

// test('will accept exactly 3 digits', () => {
//   const test = 234;
//   const runFunc = vanitySuggestions(test);
//   expect(runFunc).toBe(['beg']);
// });

test("won't accept more than 10 digits", () => {
  const test = 12345678910;
  expect(vanitySuggestions(test)).toBeUndefined();
});
