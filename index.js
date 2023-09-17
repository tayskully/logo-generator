const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  {
    type: "list",
    message: "which shape would you like the base of the logo to be?",
    name: "shape1",
    choices: ["square", "circle", "triangle"],
  },
  {
    type: "list",
    message: "which color would you like the shape to be?",
    name: "color1",
    choices: ["Blue", "Red", "Yellow"], //idk
  },
  {
    type: "list",
    message: "which shape would you like the text to sit in?",
    name: "shape2",
    choices: ["square", "circle", "triangle"],
  },
  {
    type: "list",
    message: "which color would you like this shape to be?",
    name: "color2",
    choices: ["Blue", "Red", "Yellow"],
  },
  {
    type: "input",
    message: "Which text would you like to render as the logo?",
    name: "text",
  },
];
function writeToFile(fileName, data) {
  let svg = renderSVG(data);
  fs.writeFile(fileName, svg),
    (err) => (err ? console.log(err) : console.log("success!!!"));
}

function init() {
  inquirer;
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      writeToFile("logo.svg", data); //from readme generator
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

//export the input formatted? like with ${} in a way that it can be received and translated

init();
//or can create a function that writes the file with the data after receiving the render funtion first and just throuwing the data in here
