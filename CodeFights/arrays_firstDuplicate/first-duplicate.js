function firstDuplicate(array) {
  const set = new Set();
  const { length } = array;
  for (let i = 0; i < length; i += 1) {
    const item = array[i];
    if (set.has(item)) return item;
    set.add(item);
  }
  return -1;
}

export { firstDuplicate };
