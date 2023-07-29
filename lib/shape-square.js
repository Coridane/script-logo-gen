const shape = require("./shape");

class square extends shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor);
    }
    render() {
        return `<svg width="300" height="200">
        <rect width="200" height="200" fill="${this.shapeColor}" />
        <text x="100" y="125" font-size="50" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
        </svg>`
    };
};

module.exports = square;