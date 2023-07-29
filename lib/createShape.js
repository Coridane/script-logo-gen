const circle = require("./shape-circle");
const square = require("./shape-square");
const triangle = require ("./shape-triangle");

function setShape(response) {

// If the user sleected the circle then it will go to the shape-circle.js
// If the user sleected the square then it will go to the shape-square.js
// If the user sleected the circle then it will go to the shape-triangle.js

    if (response.shape === "Circle") {
        let shape = new circle (response.title, response.titleColor, response.shapeColor)
        return shape.render()
    }

    if (response.shape === "Square") {
        let shape = new square (response.title, response.titleColor, response.shapeColor)
        return shape.render()
    }

    if (response.shape === "Triangle") {
        let shape = new triangle (response.title, response.titleColor, response.shapeColor)
        return shape.render()
    }
};

module.exports = setShape;