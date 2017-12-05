function isCryptSolution(crypt, solution) {
  const map = new Map();
  solution.forEach(item => map.set(item[0], item[1]));
  const result = [];
  crypt.forEach((item, i) => {
    result.push([...item].map(x => map.get(x)).reduce((sum, cur) => sum + cur));
  });
  if (result.some(str => str.length > 1 && str[0] == 0)) return false;
  let [first, second, third] = result;
  return (second == third - first);
}
