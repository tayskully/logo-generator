const fs = require("fs");
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);
const renderSVG = require("./lib/shapes"); //is this right?
const { Circle, Triangle, Square, SVG } = require("./lib/shapes");
const questions = [
  {
    type: "maxlength-input",
    message: "Which text would you like to render as the logo?",
    name: "text",
    maxLength: 3,
  },
  {
    type: "input",
    message:
      "Which color would you like the text to be? Enter a color or a hexadecimal number",
    name: "textColor",
  },
  {
    type: "list",
    message: "Which shape would you like the logo to be?",
    name: "shape",
    choices: ["square", "circle", "triangle"],
  },
  {
    type: "input",
    message:
      "Which color would you like the shape to be? Enter a color or a hexadecimal number",
    name: "shapeColor",
  },
];

function writeToFile(fileName, data) {
  //deal with data here???
  // let svg = renderSVG(data); //which will be imported from the shapes js
  fs.writeFile(fileName, data, (err) => {
    err ? console.log(err) : console.log("Generating Logo.....");
  });
}

function init() {
  inquirer;
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      //declare variable, and redefine through the if statement
      let shape;
      if (data.shape === "circle") {
        shape = new Circle();
        //set color
        shape.setColor(data.shapeColor);
      }
      if (data.shape === "square") {
        shape = new Square();
        //set color
        shape.setColor(data.shapeColor);
      }
      if (data.shape === "triangle") {
        shape = new Triangle();
        //set color
        shape.setColor(data.shapeColor);
      }
      const svg = new SVG();
      //set shape and text elements
      const text = data.text;
      const textColor = data.textColor;
      console.log(text);
      console.log(textColor);
      svg.setTextEl(text, textColor);
      svg.setShapeEl(shape);
      const logo = svg.render();

      //render svg!!!
      writeToFile("logo.svg", logo);
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("error!");
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
        console.log("something else is wrong...");
      }
    });
}
//initialize INIT!
init();
