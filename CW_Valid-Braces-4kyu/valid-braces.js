const validBraces = braces => {

  const brackets = braces.match(/[\[\](){}]/g);
  const isOpening = item => ['{', '[', '('].includes(item);
  const pairs = { ']': '[', ')': '(', '}': '{' };
  const stack = [];

  for (let i = 0; i < brackets.length; i += 1) {
    let stackHead = stack[stack.length - 1];
    if (isOpening(brackets[i])) stack.push(brackets[i]);
    else if (pairs[brackets[i]] == stackHead) stack.pop();
    else return false;
  }

  return (stack.length === 0) ? true : false;
};