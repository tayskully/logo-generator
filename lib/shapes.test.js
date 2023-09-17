//const shapes???? = require('shapes.js'); all shapes?
//const triangle
// const circle
// const square

describe("Shapes", () => {
  //test for each shape separately
  decribe("Triangle", () => {
    //act
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  }),
    decribe("Square", () => {
      //act
      const shape = new Triangle(); //change
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    }),
    decribe("Circle", () => {
      //act
      const shape = new Triangle(); //change
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
});
