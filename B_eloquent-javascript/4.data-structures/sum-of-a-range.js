
const range = (start, finish, step = 1) => {
  const result = [];
  if (step < 0) return range(finish, start, -step).reverse();
  for (let i = start; i <= finish; i += step) {
    result.push(i);
  }
  return result;
};

const sum = (array) => array.reduce((sum, num) => sum + num, 0);

export {range, sum};