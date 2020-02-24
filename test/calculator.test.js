const Calculator = require("../Calculator");
test("Calculator 5 plus 2 to equal 7", () => {
        let Calc = new Calculator();
        const a = 5;
        const b = 2;
        expect(Calc.Add(a,b)).toBe(7);
    }
);
test("Calculator 10 subtract 3 to equal 7", () => {
        let Calc = new Calculator();
        const a = 10;
        const b = 3;
        expect(Calc.Subtract(a,b)).toBe(7);
    }
);
test("Calculator 3 multiplies by 3 to equal 9", () => {
        let Calc = new Calculator();
        const a = 3;
        const b = 3;
        expect(Calc.Multiply(a,b)).toBe(9);
    }
);


test("Calculator 2 divided by 2 to equal 1", () => {
    let Calc = new Calculator();
    const a = 2;
    const b = 2;
    expect(Calc.Divide(a,b)).toBe(1);
}
);
test("Calculator 2 squared to equal 4", () => {
        let Calc = new Calculator();
        const a = 2;
        expect(Calc.Square(a)).toBe(4);
    }
);
test("Calculator 49 root to equal 7", () => {
        let Calc = new Calculator();
        const a = 49;
        expect(Calc.SqRoot(a)).toBe(7);
    }
);
test('Calculator sum of array 5,4,3,2,1 is 15', () => {
    let Calc = new Calculator();
    let sumArray = [5,4,3,2,1]
    expect(Calc.Add(sumArray)).toBe(15);
    expect(Calc.Result).toBe(15);

});