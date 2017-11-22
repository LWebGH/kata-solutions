const reduce = (array, callback, start) => {
  let current = start;
  let length = array.length;
  for (let i = 0; i < length; i += 1) {
    current = callback(current, array[i]);
  }
  return current;
};

export { reduce };