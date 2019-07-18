const checkWord = require('../checkWord');

describe('checkWord function exists', () => {
  it('is defined', () => {
    expect(checkWord).toBeDefined();
  });
});

describe('returns an array', () => {
  it('returns an array', () => {
    const test = ['this', 'is', 'a', 'test'];
    const value = checkWord(test);
    expect(Array.isArray(value)).toBe(true);
  });
});

describe('beg returns true', () => {
  it('adds true word to array', () => {
    const test = ['beg'];
    const value = checkWord(test);
    expect(value).toEqual(['beg']);
  });
});

describe('bg returns false', () => {
  it('does not add false word to array', () => {
    const test = ['bg'];
    const value = checkWord(test);
    expect(value).toEqual([]);
  });
});
