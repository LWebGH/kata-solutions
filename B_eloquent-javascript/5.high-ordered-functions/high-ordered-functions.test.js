import { ancestryFile } from './ancestry';
import { flattering } from './flattering';
import { tableOfNames, ageDifference } from './age-difference';
import { lifeExpectancy } from './life-expectancy';
import {every, some} from './every-and-some';


describe('One dimensional array tests', () => {
  test('flattering([[1, 2, 3], [4, 5], [6]]) => [ 1, 2, 3, 4, 5, 6 ]', () => {
    expect(flattering([[1, 2, 3], [4, 5], [6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('flattering([[1, 2, 3], [4, 5, ["another", "dimension", ["of", "arrays", "inside", "others"]]], [6]]) => [ 1, 2, 3, 4, 5, "another", "dimension", "of", "arrays", "inside", "others", 6 ]', () => {
    expect(flattering([[1, 2, 3], [4, 5, ["another", "dimension", ["of", "arrays", "inside", "others"]]], [6]])).toEqual([1, 2, 3, 4, 5, "another", "dimension", "of", "arrays", "inside", "others", 6]);
  });
});

describe('Age difference tests', () => {
  test('ageDifference(ancestryFile).toFixed(2)).toEqual(31.22)', () => {
    expect(ageDifference(ancestryFile).toFixed(2)).toEqual('31.22');
  });
});

describe('ever() and some() tests', () => {
  test('every([NaN, NaN, NaN], isNaN)).toBe(true)', () => {
    expect(every([NaN, NaN, NaN], isNaN)).toBe(true);
  });
  test('every([NaN, NaN, 4], isNaN)).toBe(false)', () => {
    expect(every([NaN, NaN, 4], isNaN)).toBe(false);
  });
  test('some([NaN, 3, 4], isNaN)).toBe(true)', () => {
    expect(some([NaN, 3, 4], isNaN)).toBe(true);
  });
  test('some([2, 3, 4], isNaN)).toBe(false)', () => {
    expect(some([2, 3, 4], isNaN)).toBe(false);
  });
});
