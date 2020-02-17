const subtract = require("../subtract");
a =10;
b= 3;
c = subtract(a,b);

test('subtract 10 - 3 to equal 7', () => { expect(subtract(a,b)).toBe(7)});