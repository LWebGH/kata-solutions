const every = (array, callback) => {
  let length = array.length;
  for (let i = 0; i < length; i += 1) {
    if (!callback(array[i])) return false;
  }
  return true;
};
const some = (array, callback) => {
  let length = array.length;
  for (let i = 0; i < length; i += 1) {
    if (callback(array[i])) return true;
  }
  return false;
};

export {every, some};