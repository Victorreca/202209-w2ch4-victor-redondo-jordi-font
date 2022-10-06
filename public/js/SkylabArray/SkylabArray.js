class SkylabArray {
  length;
  array;

  constructor(...args) {
    this.array = args;
    this.length = this.lengthProperty();
  }

  lengthProperty = () => {
    const arrayLength = this.array;
    let countElements = 0;
    arrayLength.forEach(() => countElements++);

    // for (const element of arrayLength) {
    //   countElements++;
    // }
    return countElements;
  };
}
export default SkylabArray;
