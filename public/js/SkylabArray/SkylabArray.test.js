import lengthProperty from "./SkylabArray";

describe("Given the function SkylabArray", () => {
  describe("When it receives the values '1, 2, 3, 4, 9, 4, 9'", () => {
    test("It should return '7'", () => {
      const values = "1, 2, 3, 4, 9, 4, 9";
      const expectedLength = 4;

      const lengthValue = new lengthProperty(values);

      expect(lengthValue).toBe(expectedLength);
    });
  });
});
