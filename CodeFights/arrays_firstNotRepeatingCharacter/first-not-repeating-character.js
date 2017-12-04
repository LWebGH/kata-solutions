function firstNotRepeatingCharacter(s) {
  const uniq = new Set()
  const duplicate = new Set();
  const { length } = s;

  for (let i = 0; i < length; i += 1) {
    const item = s[i];
    if (!uniq.has(item)) uniq.add(item);
    else duplicate.add(item);
  }

  return [...uniq].filter(item => !duplicate.has(item))[0] || '_';
}

export { firstNotRepeatingCharacter };
