const map = (array, callback) => {
  const mapped = [];
  let length = array.length;
  for (let i = 0; i < length; i += 1) {
    mapped.push(callback(array[i]));
  }
  return mapped;
};

export { map };