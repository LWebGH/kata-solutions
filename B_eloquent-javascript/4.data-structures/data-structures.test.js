import {range, sum} from './sum-of-a-range';

describe('range() and sum() tests', () => {
  test('range(1, 10) => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]', () => {
    expect(range(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test('sum(range(1, 10)) => 55', () => {
    expect(sum(range(1, 10))).toBe(55);
  });
  test('range(1, 10, 2) => [1, 3,	5, 7, 9]', () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
  test('sum(range(1, 10, 2)) => 25', () => {
    expect(sum(range(1, 10, 2))).toBe(25);
  });
  test('range(5, 2, -1) => [5, 4, 3, 2]', () => {
    expect(range(5, 2, -1)).toEqual([5, 4, 3, 2]);
  });
  test('sum(range(5, 2, -1)) => 14', () => {
    expect(sum(range(5, 2, -1))).toBe(14);
  });
});