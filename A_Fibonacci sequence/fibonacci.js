const memoize = (func) => {
  let map = new Map();
  return (arg) => {
    if (!map.has(arg)) map.set(arg, func(arg));
    return map.get(arg);
  };
};

const fib = memoize((n) => {
  return (n === 0 || n === 1) ? 1 : fib(n - 1) + fib(n - 2);
});