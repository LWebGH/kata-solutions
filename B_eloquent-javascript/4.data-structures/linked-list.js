
const arrayToListRecursive = (array) => {
  let length = array.length;
  const iter = (acc, list) => {
    if (acc < 0) return list;
    return iter(acc - 1, {value: array[acc], rest: list});
  }
  return iter(length - 1, null)
};

const arrayToList = (array) => {
  let length = array.length;
  let list = null;
  for (let i = length - 1; i >= 0; i -= 1) {
    list = {value: array[i], rest: list};
  }
  return list;
};

const listToArrayRecursive = (list) => {
  const iter = (list, array) => {
    if (!list) return array;
    array.push(list.value);
    return iter(list.rest, array);
  }
  return iter(list, []);
};

const listToArray = (list) => {
  let array = [];
  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
};

const prepend = (num, list) => {
  return {
    value: num,
    rest: list
  }
}

const nth = (list, num) => {
  if (!list) return undefined;
  if (num === 0) return list.value;
  return nth(list.rest, num - 1);
};

export { arrayToList, listToArray, arrayToListRecursive, listToArrayRecursive, prepend, nth };