function iCoordinateMinus(i) {
  let iChecked;
  if (i === 0) iChecked = 14;
  else iChecked = i;
  return iChecked;
}

describe("Given a iCoordinateMinus function", () => {
  describe("When it receives 0", () => {
    test("Then it should return 14", () => {
      const iCoordinateReceived = 0;
      const iCoordinateExpected = 14;

      const iCoordinate = iCoordinateMinus(iCoordinateReceived);

      expect(iCoordinate).toBe(iCoordinateExpected);
    });
  });

  describe("When it receives 5", () => {
    test("Then it should return 5", () => {
      const iCoordinateReceived = 5;
      const iCoordinateExpected = 5;

      const iCoordinate = iCoordinateMinus(iCoordinateReceived);

      expect(iCoordinate).toBe(iCoordinateExpected);
    });
  });
});
