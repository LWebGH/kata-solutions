const reverseArray = (array) => {
  let result = [];
  for (let i = array.length - 1; i >= 0; i -= 1) {
    result.push(array[i]);
  }
  return result;
};

const reverseArrayInPlace = (array) => {
  let index = array.length - 1;
  let copy = [...array];
  for (let i = 0; i <= index; i += 1) {
    array[i] = copy[index - i];
  }
  return array;
};

export { reverseArray, reverseArrayInPlace };