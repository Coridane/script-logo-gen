const shape = require("./shape");

class circle extends shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor);
    };
    render() {
        return `<svg width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
        </svg>`
    };
};

module.exports = circle;