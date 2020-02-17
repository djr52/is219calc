const sqroot = require("../sqroot");
a = 49;

c = sqroot(a);

test('Square root of 49 equals 7', () => { expect(sqroot(a)).toBe(7)});