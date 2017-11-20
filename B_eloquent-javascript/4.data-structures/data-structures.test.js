import { range, sum } from './sum-of-a-range';
import { reverseArray, reverseArrayInPlace } from './reverse-array';
import { arrayToList, listToArray, arrayToListRecursive, listToArrayRecursive, prepend, nth } from './linked-list';
import { deepEqual } from './deep-equal';

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

describe('reverseArray() and reverseArrayInPlace() tests', () => {
  const array = [1, 2, 3];
  test('const array = [1, 2, 3], reverseArray(array) => [3, 2, 1]', () => {
    expect(reverseArray(array)).toEqual([3, 2, 1]);
  });
  test('array = [1, 2, 3]', () => {
    expect(array).toEqual([1, 2, 3]);
  });
  test('reverseArrayInPlace(array) = [3, 2, 1]', () => {
    expect(reverseArrayInPlace(array)).toEqual([3, 2, 1]);
  });
  test('array = [3, 2, 1]', () => {
    expect(array).toEqual([3, 2, 1]);
  });
});
describe('linked-list tests', () => {
  test('arrayToList([10, 20]) => {value: 10, rest: {value: 20, rest: null}}', () => {
    expect(arrayToList([10, 20])).toEqual({value: 10, rest: {value: 20, rest: null}});
  });
  test('arrayToListRecursive([10, 20]) => {value: 10, rest: {value: 20, rest: null}}', () => {
    expect(arrayToListRecursive([10, 20])).toEqual({value: 10, rest: {value: 20, rest: null} });
  });
  test('listToArray(arrayToList([10, 20, 30])) => [10, 20, 30]', () => {
    expect(listToArray(arrayToList([10, 20, 30]))).toEqual([10, 20, 30]);
  });
  test('listToArray(arrayToListRecursive([10, 20, 30])) => [10, 20, 30]', () => {
    expect(listToArray(arrayToListRecursive([10, 20, 30]))).toEqual([10, 20, 30]);
  });
  test('prepend(10, prepend(20, null)) => {value: 10, rest: {value: 20, rest: null}}', () => {
    expect(prepend(10, prepend(20, null))).toEqual({value: 10, rest: {value: 20, rest:	null}});
  });
  test('nth(arrayToList([10, 20, 30]), 1) => 20', () => {
    expect(nth(arrayToList([10, 20, 30]), 1)).toBe(20);
  });
});
describe('deep-equal tests', () => {
  const obj = { here: { is: "an" }, object: 2 };
  test('deepEqual(arrayToList([10, 20]), { value: 10, rest: { value: 20, rest: null }}) => true', () => {
    expect(deepEqual(arrayToList([10, 20]), { value: 10, rest: { value: 20, rest: null }})).toBe(true);
  });
  test('deepEqual(obj, obj) => true', () => {
    expect(deepEqual(obj, obj)).toBe(true);
  });
  test('deepEqual(obj, { here: 1, object: 2 }) => false', () => {
    expect(deepEqual(obj, { here: 1, object: 2 })).toBe(false);
  });
});
