"use strict";

var mathOperations = {
    sum: function(a,b) {
        return a + b;
    },
    diff: function (a,b) {
        return a - b;
    },
    product: function (a,b) {
        return a * b;
    },
    // Add trailing comma to indicate the end of the object properties
    divide: function (a,b) {
        return a / b;
    } // Missing trailing comma
}; // Add semicolon to terminate the statement

module.exports = mathOperations;
