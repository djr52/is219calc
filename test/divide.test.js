const divide = require("../divide");
a =2;
b= 2;
c = divide(a,b);

test('divides 2 / 2 to equal 1', () => { expect(divide(a,b)).toBe(1)});