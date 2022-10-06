class SkylabArray {
  length;
  array;

  constructor(...args) {
    this.array = args;
    this.length = this.lengthProperty(this.array);
  }

  lengthProperty = (array) => {
    const arrayLength = array;
    let countElements = 0;
    for (const element of arrayLength) {
      countElements++;
    }
    return countElements;
  };
}
export default SkylabArray;
