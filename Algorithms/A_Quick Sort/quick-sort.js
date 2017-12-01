// Complexity: O(n log n)

const quickSort = array => {
  const arrayCopy = [...array];  // O(n log n + n) ??? 
  
  const sort = (copy) => {
    if (array.length <= 1) return array;
    const pivot = copy.splice(Math.floor(copy.length / 2), 1)[0];
    const lesser = copy.filter(item => item < pivot);
    const equalnGreater = copy.filter(item => item >= pivot);
    return [...quickSort(lesser), pivot, ...quickSort(equalnGreater)];
  };

  return sort(arrayCopy);
};

export default quickSort;
