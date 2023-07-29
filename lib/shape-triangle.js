const shape = require("./shape");

class triangle extends shape {
    constructor(title, titleColor, shapeColor) {
        super(title, titleColor, shapeColor);
    }
    render() {
        return `<svg width="300" height="200">
        <polygon points="100, 15 200 ,200 0, 200" fill="${this.shapeColor}" />
        <text x="100" y="185" font-size="50" text-anchor="middle" fill="${this.titleColor}">${this.title}</text>
        </svg>`
    };
};

module.exports = triangle;