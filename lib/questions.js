const validColors = require("./validColors.js")

// These questions deal with the title text and color.
// The color format will determine whether we gather a color name or hex value.
// validColors.js (see above) will be used to ensure the color names are vlaid.

const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter a name (1-3 characters)",        
        validate: (answer) => {
            if (answer.length > "3" || answer.length == "") {
                return console.log(" It must be between 1 and 3 characters.")
            }            
            return true;            
        }    
    },
    {
        type: "list",
        name: "titleColorFormat",
        message: "Choose a color format for the text",
        choices: ["Enter a color", "Enter a hexadecimal value"],
    },
    {
        type: "input",
        name: "titleColor",
        message: "Enter a color for the text",
        when: (answers) => {
            if(answers.titleColorFormat === "Enter a color") {
                return true;                
            }
                return false;                
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = validColors.length; i < len; i++) {
                if (answerLowercase.indexOf(validColors[i]) != -1) {
                    return true;
                }}
                return console.log(" Please enter a valid color")
            }
    },
    {
        type: "input",
        name: "titleColor",
        message: "Enter a hexadecimal value for the text",
        default: "Start with #",
        when: (answers) => {
            if(answers.titleColorFormat === "Enter a hexadecimal value") {
                return true;                
            }
                return false;
        },
        validate: (answer) => {
            const hexRegEx = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            if (!answer.match(hexRegEx)) {
                return console.log(" Please enter a valid hex value")
            }
                return true;                
            }            
    },        
    {
        type: "list",
        name: "shape",
        message: "Choose a shape",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "list",
        name: "shapeColorFormat",
        message: "Choose a color format for the shape",
        choices: ["Enter a color", "Enter a hexadecimal value"],
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color for the shape",
        when: (answers) => {
            if(answers.shapeColorFormat === "Enter a color") {
                return true;                
            }
                return false;                
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = validColors.length; i < len; i++) {
                if (answerLowercase.indexOf(validColors[i]) != -1) {
                    return true;
                }}
                return console.log(" Please enter a valid color")
            }
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a hexadecimal value for the shape",
        default: "Start with #",
        when: (answers) => {
            if(answers.shapeColorFormat === "Enter a hexadecimal value") {
                return true;                
            }
                return false;
        },
        validate: (answer) => {
            const hexRegEx = "^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$"
            if (!answer.match(hexRegEx)) {
                return console.log(" Please enter a valid hex value")
            }
                return true;                
            }            
    },        
];

module.exports = questions