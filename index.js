const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "list",
      message: "which shape would you like the base of the logo to be?",
      name: "shape1",
      choices: ['square', 'circle', 'triangle']
    },
    {
      type: "list",
      message: "which shape would you like the text to sit in?",
      name: "shape2",
      choices: ['square', 'circle', 'triangle'],
        },
    {
      type: "input", 
      message: "Which text would you like to render as the logo?",
      name: "text",
    },
  ]).then((response) => { //data , console log it to see what it looks like, what you're getting
    console.log(response);
    fs.appendFile('shapes.js', JSON.stringify(response), (err) => err? console.log(err): console.log("success!"));
     
   
  });