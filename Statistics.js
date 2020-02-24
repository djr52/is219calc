const Calculator = require("./Calculator");
const MathOperations = require("./MathOperations");

class Statistics extends Calculator{
    Mean(values){
        let valueLen = values.length;
        let sum = this.Add(values);
        return this.Divide(sum, valueLen);




    }
    Variance(a, b){
        return this.Subtract(a,b);


    }
}