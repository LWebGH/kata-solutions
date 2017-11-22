import { filter } from './filter';
import { map } from './map';
import { reduce } from './reduce';

describe('filter(), map(), reduce() functions tests', () => {
  test('filter([1, 2, 4, 10, 12, -1, 0], (n) => n > 9).toEqual([10, 12])', () => {
    expect(filter([1, 2, 4, 10, 12, -1, 0], (n) => n > 9)).toEqual([10, 12]);
  });
  test('map([1, 2, 4, 10, 12, -1, 0], (n) => n + 2).toEqual([3, 4, 6, 12, 14, 1, 2])', () => {
    expect(map([1, 2, 4, 10, 12, -1, 0], (n) => n + 2)).toEqual([3, 4, 6, 12, 14, 1, 2]);
  });
  test('reduce([1, 2, 4, 10], (current, item) => current + item, 0).toBe(17)', () => {
    expect(reduce([1, 2, 4, 10], (current, item) => current + item, 0)).toBe(17);
  });
});