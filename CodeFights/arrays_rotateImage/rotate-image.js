function rotateImage(a) {
  const { length } = a;
  const result = new Array(length);
  for (let i = 0; i < length; i += 1) {
    result[i] = [];
    for (let j = length - 1; j >= 0; j -= 1) {
      result[i].push(a[j][i]);
    }
  }
  return result;
}

export { rotateImage };
