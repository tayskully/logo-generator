const { Triangle, Circle, Square } = require("./shapes");


describe("Shapes", () => {
  describe("Triangle", () => {
    it("should match the SVG format of a triangle of a specified color", () => {
      // Arrange
      const shape = new Triangle();
      shape.setColor("blue");
      // Act & Assert
      expect(shape.render()).toEqual(
        '<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="blue"/>'
      );
    });
  });

  describe("Square", () => {
    it("should match the SVG format of a square of a specified color", () => {
      // Arrange
      const shape = new Square();
      shape.setColor("red");

      // Act & Assert
      expect(shape.render()).toEqual(
        '<rect x="50" height="200" width="200" fill="red"/>'
      );
    });
  });

  describe("Circle", () => {
    it("should match the SVG format of a circle of a specified color", () => {
      // Arrange
      const shape = new Circle();
      shape.setColor("green");

      // Act & Assert
      expect(shape.render()).toEqual(
        '<circle cx="50%" cy="50%" r="100" fill="green"/>'
      );
    });
  });
});

