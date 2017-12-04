import { rotateImage } from './rotate-image';


describe('rotateImage tests', () => {
  test('rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) => [[7, 4, 1], [8, 5, 2], [9, 6, 3]]', () => {
    expect(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  });
  test('rotateImage([]) => []', () => {
    expect(rotateImage([])).toEqual([]);
  });
});
