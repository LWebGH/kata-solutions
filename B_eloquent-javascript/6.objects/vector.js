class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }
  minus(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }
  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

export { Vector };