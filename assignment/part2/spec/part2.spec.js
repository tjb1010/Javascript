const vanitySuggestions = require('../part2');

describe('vanitySuggestions function exists', () => {
  it('is defined', () => {
    expect(vanitySuggestions).toBeDefined();
  });
});

describe('returns an array', () => {
  it('returns an array', () => {
    const test = 256252437;
    const value = vanitySuggestions(test);
    expect(Array.isArray(value)).toBe(true);
  });
});

describe("won't accept less than 3 digits", () => {
  it('is undefined', () => {
    const test = 12;
    expect(vanitySuggestions(test)).toBeUndefined();
  });
});

describe("won't accept more than 10 digits", () => {
  it('is undefined', () => {
    const test = 12345678910;
    expect(vanitySuggestions(test)).toBeUndefined();
  });
});

describe('234 returns ["beg"]', () => {
  it('filters out non-words', () => {
    const test = 234;
    const value = vanitySuggestions(test);
    expect(value).toEqual(['beg']);
  });
});

describe('866 returns ["tom", "ton", "too"]', () => {
  it('returns multiple words', () => {
    const test = 866;
    const value = vanitySuggestions(test);
    expect(value).toEqual(['tom', 'ton', 'too']);
  });
});
