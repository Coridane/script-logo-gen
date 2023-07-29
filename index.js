// These are the packages that we need. Inquirer for the questions,
// generateMarkdown for the HTML, and fs to write the file.
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions.js");
const createShape = require("./lib/createShape.js");
const fileName = "./dist/logo.svg";

function createLogo(response) {
    const svg = createShape(response);
    fs.writeFile(fileName, svg, () => console.log("Generated dist/logo.svg"));    
}

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        createLogo(response);        
    })
    .catch(err => {
        console.log(err)
    });
}

init();