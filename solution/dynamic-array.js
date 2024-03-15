class DynamicArray {

  constructor(defaultSize = 4) {

    // Your code here
    this.data = new Array(defaultSize);
    this.length = 0;
    this.capacity = defaultSize;

  }

  read(index) {

    // Your code here
    if (index >= 0 && index < this.length) {
      return this.data[index];
    } else {
      return undefined;
    }
  }

  unshift(val) {

    // Your code here
    if (this.length === this.capacity) {
      this._resize(this.capacity * 2);
    }
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length++;
  }

  _resize(newCapacity) {
    const newData = newArray(newCapacity);
    for (let i = 0; i < this.length; i++) {
      newData[i] = this.data[i];
    }
    this.data = newData;
    this.capacity = newCapacity;
    this.length = 0;
  }

}


module.exports = DynamicArray;