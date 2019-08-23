import { getPositionIndex } from "./utils";

const mock = ["red", "green", "blue", "gold"];

describe("getPositionIndex", () => {
  it("returns correct next position for different indexes", () => {
    expect(getPositionIndex(0, mock)).toBe(1);
    expect(getPositionIndex(1, mock)).toBe(2);
    expect(getPositionIndex(2, mock)).toBe(3);
  });

  it("returns 0 when current index is last element in array", () => {
    expect(getPositionIndex(mock.length - 1, mock)).toBe(0);
  });
});
