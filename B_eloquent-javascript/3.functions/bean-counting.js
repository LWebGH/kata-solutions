// const countChar = (string, simbol) => string.match(/[${simbol}]/gi).length;    //to ez
const countChar = (string, simbol) => {
  let result = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == simbol) result += 1;
  }
  return result;
};

console.log(countChar('asdasfgWEFGASDGVSppppp', 'p');
// → 5

console.log(countChar("kakkerlak", "k"));
// → 4