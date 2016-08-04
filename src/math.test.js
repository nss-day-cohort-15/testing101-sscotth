describe("The specification for basic math", function () {

  it("should have an add function", function () {
    expect(add).toBeDefined();
  });

  it("should add two integers", function () {
    expect(add(2, 5)).toBe(7);
  });

  it("should have a subtract function", function () {
    expect(subtract).toBeDefined();
  });

  it("should subtract two integers", function () {
    expect(subtract(7, 5)).toBe(2);
  });

});
