import validBraces from './valid-braces';

describe('function must return a correct value', () => {
  test('(){}[] => true', () => {
    expect(validBraces('some(text){he}[re]')).toBe(true);
  });

  test('([{}]) => true', () => {
    expect(validBraces('([{}])')).toBe(true);
  });

  test('(} => false', () => {
    expect(validBraces('(}')).toBe(false);
  });

  test('[(]) => false', () => {
    expect(validBraces('[(])')).toBe(false);
  });

  test('[({})](] => false', () => {
    expect(validBraces('[({})](]')).toBe(false);
  });
});
