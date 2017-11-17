const isEven = (num) => {
  if (num < 0) num = Math.abs(num);
  if (num === 0) return true;
  if (num === 1) return false;
  return isEven(num - 2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false