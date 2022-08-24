"use strict";
exports.__esModule = true;
var Add = /** @class */ (function () {
    function Add(x, y) {
        this.x = x;
        this.y = y;
    }
    Add.prototype.sum = function () {
        console.log("Sum is " + (this.x + this.y));
    };
    return Add;
}());
exports.Add = Add;
