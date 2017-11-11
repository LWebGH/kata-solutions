import { clone, push, unshift, pop, shift, sort, del, splice } from './immutable-array-methods';

const immutableArray = [1, 2, 3, 1];

describe('clone', () => {
  test('clone(immutableArray).toEqual([...immutableArray])', () => {
    expect(clone(immutableArray)).toEqual([...immutableArray]);
  });
  test('clone(immutableArray).not.toBe(immutableArray)', () => {
    expect(clone(immutableArray)).not.toBe(immutableArray);
  });
});

describe('push', () => {
  test('push(\'a\', \'b\')(immutableArray) => [1, 2, 3, 1, \'a\', \'b\']', () => {
    expect(push('a', 'b')(immutableArray)).toEqual([1, 2, 3, 1, 'a', 'b']);
  });
  test('expect(immutableArray).toEqual([1, 2, 3, 1])', () => {
    expect(immutableArray).toEqual([1, 2, 3, 1]);
  });
});

describe('unshift', () => {
  test('unshift(\'a\', \'b\')(immutableArray) => toEqual([\'a\', \'b\', 1, 2, 3, 1]', () => {
    expect(unshift('a', 'b')(immutableArray)).toEqual(['a', 'b', 1, 2, 3, 1]);
  });
  test('expect(immutableArray).toEqual([1, 2, 3, 1])', () => {
    expect(immutableArray).toEqual([1, 2, 3, 1]);
  });
});

describe('shift', () => {
  test('shift(immutableArray) => toEqual(2, 3, 1]', () => {
    expect(shift(immutableArray)).toEqual([2, 3, 1]);
  });
  test('expect(immutableArray).toEqual([1, 2, 3, 1])', () => {
    expect(immutableArray).toEqual([1, 2, 3, 1]);
  });
});