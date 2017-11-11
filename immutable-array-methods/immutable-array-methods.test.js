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
  test('push(\'a\', \'b\')(immutableArray) => [1, 2, 3, 1, \'a\', \'b\'])', () => {
    expect(push('a', 'b')(immutableArray)).toEqual([1, 2, 3, 1, 'a', 'b']);
  });
});

describe('pop', () => {
  test('pop(immutableArray) => toEqual([1, 2, 3])', () => {
    expect(pop(immutableArray)).toEqual([1, 2, 3]);
  });
});

describe('unshift', () => {
  test('unshift(\'a\', \'b\')(immutableArray) => toEqual([\'a\', \'b\', 1, 2, 3, 1])', () => {
    expect(unshift('a', 'b')(immutableArray)).toEqual(['a', 'b', 1, 2, 3, 1]);
  });
});

describe('shift', () => {
  test('shift(immutableArray) => toEqual([2, 3, 1])', () => {
    expect(shift(immutableArray)).toEqual([2, 3, 1]);
  });
});

describe('sort', () => {
  test('sort()(immutableArray) => toEqual([1, 1, 2, 3])', () => {
    expect(sort()(immutableArray)).toEqual([1, 1, 2, 3]);
  });
  test('sort((a, b) => b - a)(immutableArray) => toEqual([3, 2, 1, 1])', () => {
    expect(sort((a, b) => b - a)(immutableArray)).toEqual([3, 2, 1, 1]);
  });
});

describe('del', () => {
  test('expect(del(0)(immutableArray)).toEqual([2, 3, 1])', () => {
    expect(del(0)(immutableArray)).toEqual([2, 3, 1]);
  });
  test('expect(del(1)(immutableArray)).toEqual([1, 3, 1])', () => {
    expect(del(1)(immutableArray)).toEqual([1, 3, 1]);
  });
});

describe('splice', () => {
  test('splice(0, 0, 12)(immutableArray)).toEqual([12, 1, 2, 3, 1])', () => {
    expect(splice(0, 0, 12)(immutableArray)).toEqual([12, 1, 2, 3, 1]);
  });
  test('splice(1, 3, 3, 3, 7)(immutableArray)).toEqual([1, 3, 3, 7])', () => {
    expect(splice(1, 3, 3, 3, 7)(immutableArray)).toEqual([1, 3, 3, 7]);
  });
});

describe('immutablility test', () => {
  test('immutableArray.toEqual([1, 2, 3, 1])', () => {
    expect(immutableArray).toEqual([1, 2, 3, 1]);
  });
});
