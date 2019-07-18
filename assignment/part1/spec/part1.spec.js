const convertVanityToNumbers = require('../part1');

describe('convertVanityToNumbers function exists', () => {
  it('is defined', () => {
    expect(convertVanityToNumbers).toBeDefined();
  });
});

describe('output is 10 numbers and +1, no letters', () => {
  it('is right length and chars', () => {
    const test = '365-windows';
    expect(convertVanityToNumbers(test)).toMatch(/^\+([0-9]){10}[0-9]$/);
  });
});

describe('output contains no letters, matches regex', () => {
  it('contains no letters', () => {
    const test = '365-windows';
    expect(convertVanityToNumbers(test)).toMatch(/^[^a-zA-Z]+$/);
  });
});

describe("output contains letters, doesn't match regex", () => {
  it('contains letters', () => {
    expect('365-windows').not.toMatch(/^[^a-zA-Z]+$/);
  });
});

describe('output numbers match corresponding keypad keys', () => {
  it('matches right keys', () => {
    const test = '365-windows';
    expect(convertVanityToNumbers(test)).toBe('+13659463697');
  });
});

describe('output numbers do not match corresponding keypad keys', () => {
  it("doesn't match right keys", () => {
    const test = '365-linux04';
    expect(convertVanityToNumbers(test)).not.toBe('+13659463697');
  });
});

describe('is not case sensitive', () => {
  it('accepts any case', () => {
    const test = '365-WINDowS';
    expect(convertVanityToNumbers(test)).toBe('+13659463697');
  });
});
