
const sum = require('./sum');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const square = require('./square');
const sqroot = require('./sqroot');


class MathOperations {

    static sum(a,b) {
        return sum(a,b);
    }
    static difference(a,b){
        return subtract(a,b);
    }
    static product(a,b) {
        return multiply(a,b);
    }
    static quotient(a,b) {
        return divide(a,b);
    }
    static squared(a){
        return square(a);
    }
    static sqroot(a){
        return sqroot(a);
    }

}

module.exports = MathOperations;