const min = (a, b) => (a - b) > 0 ? b : a;
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
