import twoSum from './01_two-sum';

describe('must return indices of the two numbers such that they add up to a specific target', () => {
  test('([2, 7, 11, 15], 9) => [0, 1]', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  
});
