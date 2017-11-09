/**
 * @param {string} moves
 * @return {boolean}
 **/
const judgeCircle = moves => {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i += 1) {
    let letter = moves[i];
    if (letter == 'L') x += 1;
    else if (letter == 'R') x -= 1;
    else if (letter == 'U') y += 1;
    else if (letter == 'D') y -= 1;
  }
  return x === 0 && y === 0;
};