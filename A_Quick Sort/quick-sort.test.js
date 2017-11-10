import func from './quick-sort';

const arr = [1327, -7219, 5085, 7187, 1965, -4392, -5212, 8550, -2531, 6789];
const arrSorted = [-7219, -5212, -4392, -2531, 1327, 1965, 5085, 6789, 7187, 8550];
const arr2 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const arr2Sorted = arr2.slice('').reverse();
describe('The output array must be sorted', () => {
  test('[3, 1, 2] => [1, 2, 3]', () => {
    expect(func([3, 1, 2])).toEqual([1, 2, 3]);
  });
  test('[unsorted] => [sorted]', () => {
    expect(func(arr)).toEqual(arrSorted);
  });
  test('[unsorted] => [sorted]', () => {
    expect(func(arr2)).toEqual(arr2Sorted);
  });
});