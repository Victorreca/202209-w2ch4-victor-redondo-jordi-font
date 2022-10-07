import SkylabArray from "./SkylabArray";

describe("Given the function SkylabArray", () => {
  describe("When it receives the values '1, 2, 3, 4, 9, 4, 9'", () => {
    test("It should return '7'", () => {
      const values = new SkylabArray(1, 2, 3, 4, 9, 4, 9);
      const expectedLength = 7;

      const lengthValue = values.lengthProperty();

      expect(lengthValue).toBe(expectedLength);
    });
  });
});
