const stepsCount = (n) => {
  const root = Math.ceil(Math.sqrt(n));
  const currentRowLength = root % 2 !== 0 ? root : root + 1;
  const rowsToCenter = (currentRowLength - 1) / 2;
  const cyclePosition = n - (Math.pow((currentRowLength - 2), 2));
  const innerOffset = cyclePosition % (currentRowLength - 1);
  return rowsToCenter + Math.abs(innerOffset - rowsToCenter);
};

