const multiply = require("../multiply");
a =2;
b= 2;
c = multiply(a,b);

test('multiplies 2 x 2 to equal 4', () => { expect(multiply(a,b)).toBe(4)});