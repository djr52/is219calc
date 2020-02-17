MathOperations = require("./MathOperations");

class Calculator{

    Add(a, b){
        return this.Result = MathOperations.sum(a, b);

    }
    Subtract(a, b){
        return this.Result = MathOperations.difference(a,b);
    }
    Multiply(a,b){
        return this.Result = MathOperations.product(a,b);
    }
    Divide(a, b){
        return this.Result = MathOperations.quotient(a, b);
    }
    Square(a){
        return this.Result = MathOperations.squared(a);
    }
    SqRoot(a){
        return this.Result = MathOperations.sqroot(a);
    }




}
module.exports = Calculator;