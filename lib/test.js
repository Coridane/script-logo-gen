const Circle = require("./shape-circle.js");
const Square = require("./shape-square.js");
const Triangle = require("./shape-triangle.js");

describe("Circle", () => {
    it("should generate a logo with the provided text and colors", () => {
        const circle = new Circle("SVG", "blue", "yellow");
        expect(circle.render()).toEqual(
        `<svg width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="yellow" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="blue">SVG</text>
        </svg>`);
    })
})

describe("Square", () => {
    it("should generate a logo with the provided text and colors", () => {
        const square = new Square("SVG", "blue", "yellow");
        expect(square.render()).toEqual(
        `<svg width="300" height="200">
        <rect width="200" height="200" fill="yellow" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="blue">SVG</text>
        </svg>`);
    })
})

describe("Triangle", () => {
    it("should generate a logo with the provided text and colors", () => {
        const triangle = new Triangle("SVG", "blue", "yellow");
        expect(triangle.render()).toEqual(
        `<svg width="300" height="200">
        <polygon points="100, 15 200 ,200 0, 200" fill="yellow" />
        <text x="100" y="185" font-size="50" text-anchor="middle" fill="blue">SVG</text>
        </svg>`);
    })
})