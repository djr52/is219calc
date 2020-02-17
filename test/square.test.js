const square = require("../square");
a =10;
c = square(a);

test('10 squares is equal 100', () => { expect(square(a)).toBe(100)});