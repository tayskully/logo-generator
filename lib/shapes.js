const jest = require("jest");
// const shapesInput = require("./input.js"); //pull data from  input.js ?
const { writeFile } = require("fs");

//Here we will define the functions that make the shapes. defining the class Shapes, and then using inheritance add each specific shape.
//we will add the user input to another sheet to grab the data to put over here ??

class Shapes {
  constructor(shapeColor, textColor) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
  }
  setColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

class Triangle extends Shapes {
  constructor(shapeColor, textColor) {
    super(shapeColor, textColor);
  }
  render() {
    return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}">`;
  }
}

class Square extends Shapes {
  render() {
    return `<rect x="50" height="200" width="200" fill="${this.shapeColor}">`;
  }
}

class Circle extends Shapes {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}">`;
  }
}

class SVG {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`;
  }
  setTextEl(text, textColor) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  setShapeEl(shape) {
    this.shapeEl = shape.render();
  }
}

module.exports = { Circle, SVG }; //????? renderSVG function called on index.js

//notes
//the user will input the things they want, and based on their input, one of the render functions will run with the desired class object-- square, circle, triangle
//must handle the input data, make

//the render function will take the same input data of text, text color, and shape color and put that into the shape classes that will then spit out the object with the input data, and feed that into the render funciton
//maybe each shape will have their own render funtion...... the classes
