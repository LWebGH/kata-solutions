class Sequence {
  logFive(sequence) {
    for (var i = 0; i < 5; i++) {
      if (!sequence.next()) {
        console.log('End of sequence reached');
        break;
      }  
      console.log(sequence.current());
    }
  }
}

class ArraySequence extends Sequence {
  constructor(array) {
    super();
    this.array = array;
    this.index = 0;
  }
  next() {
    if (this.index > this.length) {
      console.log('End of sequence reached');
      return false;
    }
    this.index += 1;
    return this.index;
  }
  current() {
    return this.array[this.index];
  }
  get length() {
    return this.array.length;
  }
}

class RangeSequence extends ArraySequence {
  constructor(from, to) {
    super();
    this.start = from;
    this.end = to;
    this.array = this.createArray();
  }
  createArray() {
    const array = [];
    for (let index = this.start; index <= this.end; index += 1) {
      array.push(index);
    }
    return array;
  }
}