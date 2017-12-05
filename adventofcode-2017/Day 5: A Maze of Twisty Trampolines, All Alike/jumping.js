const data = document.body.innerText.trim().split('\n').map(i => +i);

const jumping = (array) => {
  const { length } = array;
  let current = 0;
  let previous = 0;
  for (let jumps = 0; ; jumps += 1) {
    if (current >= length) return jumps;
    [previous, current] = [current, current + array[current]];
    array[previous] += 1;
  }
};

const jumping2 = (array) => {
  const { length } = array;
  let current = 0;
  let previous = 0;
  for (let jumps = 0; ; jumps += 1) {
    if (current >= length) return jumps;
    [previous, current] = [current, current + array[current]];
    array[previous] >= 3 ? array[previous] -= 1 : array[previous] += 1;
  }
};
