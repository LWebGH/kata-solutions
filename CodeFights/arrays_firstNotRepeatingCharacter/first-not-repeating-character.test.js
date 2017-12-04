import { firstNotRepeatingCharacter as notRepeating } from './first-not-repeating-character';

describe('notRepeating tests', () => {
  test('notRepeating(abacabad) => c', () => {
    expect(notRepeating('abacabad')).toBe('c');
  });
  test('notRepeating("") => _', () => {
    expect(notRepeating('')).toBe('_');
  });
  test('notRepeating(abacabaabacaba) => _', () => {
    expect(notRepeating('abacabaabacaba')).toBe('_');
  });
  test('notRepeating(z) => z', () => {
    expect(notRepeating('z')).toBe('z');
  });
});
