// Complexity: O(n log n)

const quickSort = array => {

  if (array.length <= 1) return array;

  const copy = array.slice('');
  const pivot = copy.splice(Math.floor(copy.length / 2), 1);
  const lesser = copy.filter(item => item < pivot);
  const equalnGreater = copy.filter(item => item >= pivot);

  return [].concat(quickSort(lesser), pivot, quickSort(equalnGreater));
};

export default quickSort;
