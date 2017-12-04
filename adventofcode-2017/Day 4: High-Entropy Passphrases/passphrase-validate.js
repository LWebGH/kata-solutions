function passphraseValidate(array, fn) {
  const { length } = array;
  let result = 0;
  for (let i = 0; i < length; i += 1) {
    result += fn(array[i]);
  }
  return result;
}

function itemValidate(string) {
  const set = new Set();
  const array = string.split(' ');
  const { length } = array;
  for (let i = 0; i < length; i += 1) {
    const item = array[i];
    if (set.has(item)) return 0;
    set.add(item);
  }
  return 1;
}

function itemNoAnnogram(string) {
  const set = new Set();
  const array = string.split(' ');
  const { length } = array;
  for (let i = 0; i < length; i += 1) {
    const item = array[i].split('').sort().join();
    if (set.has(item)) return 0;
    set.add(item);
  }
  return 1;
}
