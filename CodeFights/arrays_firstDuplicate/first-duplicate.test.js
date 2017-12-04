import { firstDuplicate } from './first-duplicate';

describe('firstDuplicate tests', () => {
  test('firstDuplicate([2, 3, 3, 1, 5, 2]) => 3', () => {
    expect(firstDuplicate([2, 3, 3, 1, 5, 2])).toBe(3);
  });
  test('firstDuplicate([]) => -1', () => {
    expect(firstDuplicate([])).toBe(-1);
  });
  test('firstDuplicate([2, 4, 3, 5, 1]) => -1', () => {
    expect(firstDuplicate([2, 4, 3, 5, 1])).toBe(-1);
  });
  test('firstDuplicate([2, 2]) => 2', () => {
    expect(firstDuplicate([2, 2])).toBe(2);
  });
});
