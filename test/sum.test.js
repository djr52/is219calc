const sum = require("../sum");
a =1;
b= 2;
c = sum(a,b);

test('add 1 + 2 to equal 3', () => { expect(sum(a,b)).toBe(3)});
