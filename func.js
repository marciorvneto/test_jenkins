"use strict";
exports.__esModule = true;
var myModule_1 = require("./myModule");
var myWonderfulFunction = function (x) { return 10 * x; };
console.log(myWonderfulFunction(89749874));
var myOtherFunction = function (a) {
    return a.x + a.y;
};
myModule_1.doStuff();
console.log(myOtherFunction({ x: 23, y: 45 }));
