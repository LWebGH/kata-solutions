const filter = (array, callback) => {
  const filtred = [];
  let length = array.length;
  for (let i = 0; i < length; i += 1) {
    if (callback(array[i])) filtred.push(array[i]);
  }
  return filtred;
};

export { filter };