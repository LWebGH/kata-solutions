import { Vector } from './vector';

describe('class Vector tests', () => {
  test('new Vector(1, 2).plus(new Vector(2, 3)) => {x: 3, y: 5}', () => {
    expect(new Vector(1, 2).plus(new Vector(2, 3))).toEqual({ x: 3, y: 5 });
  });
  test('new Vector(1, 2).minus(new Vector(2, 3)) => {x: -1, y: -1}', () => {
    expect(new Vector(1, 2).minus(new Vector(2, 3))).toEqual({ x: -1, y: -1 });
  });
  test('new Vector(3, 4).length) => 5', () => {
    expect(new Vector(3, 4).length).toBe(5);
  });
});
