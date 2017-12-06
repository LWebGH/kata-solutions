const memoryReallocation = (array) => {
  const set = new Set();
  while (!set.has(array.join())) {
    set.add(array.join());
    const max = Math.max(...array);
    const maxIndex = array.indexOf(max);
    array[maxIndex] = 0;
    for (let i = 1; i <= max; i += 1) {
      array[(maxIndex + i) % array.length] += 1;
    }
  }
  return set.size;
};
