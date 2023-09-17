const jest = require("jest");
const shapesInput = require("./input.js"); //pull data from  input.js
const { writeFile } = require("fs");

//here we will define the functions that make the shapes. defining the class Shapes, and then using inheritance add each specific shape.
//we will add the user input to another sheet to grab the data to put over here

class Shape {
  constructor(shape1, shape2, text) {
    //could add requirement for text input to be less than x amount of characters
    this.shape1 = shape1;
    this.shape2 = shape2;
    this.text = text;
  }
  triangle() {
    return;
  }
  square() {
    return;
  }
  circle() {
    return;
  }
}

function renderSVG(svg) {
  console.log(svg);
}

exports;
