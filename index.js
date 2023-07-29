// These are the packages, files, or destination path that we need. Inquirer is a package needed for the questions.

const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./lib/questions.js");
const createShape = require("./lib/createShape.js");
const fileName = "./dist/logo.svg";

// This will write to the file path and name above, using the response we get from createShape.js.

function createLogo(response) {
    const svg = createShape(response);
    fs.writeFile(fileName, svg, () => console.log("Generated dist/logo.svg"));    
}

// init() will send us here wheere Inquirer will ask questions (questions.js).

function init() {
    inquirer.prompt(questions)

// Then it will execute the createLogo function above.

    .then((response) => {
        createLogo(response);        
    })
    .catch(err => {
        console.log(err)
    });
}

// This is where we start our journey.

init();