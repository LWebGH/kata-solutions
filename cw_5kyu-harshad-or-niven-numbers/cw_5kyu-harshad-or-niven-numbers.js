class Harshad {
  isValid(number) {
    return number % String(number).split('').reduce((acc, n) => +acc + +n, 0) === 0;
  }
  getNext(number) {
    return this.isValid(number + 1) ? number + 1 : this.getNext(number + 1);
  }
  getSerie(count, start = 0) {
    const result = [this.getNext(start)];
    while (result.length < count) result.push(this.getNext(result[result.length - 1]))
    return result;
  }
};
const harshad = new Harshad();