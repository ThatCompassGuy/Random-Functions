"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
test('ordinal', function () {
    // 1, 2, 3 and 4
    expect(index_1.ordinal(1)).toBe('1st');
    expect(index_1.ordinal(2)).toBe('2nd');
    expect(index_1.ordinal(3)).toBe('3rd');
    expect(index_1.ordinal(4)).toBe('4th');
    // in 10s 
    expect(index_1.ordinal('11')).toBe('11th');
    expect(index_1.ordinal('12')).toBe('12th');
    expect(index_1.ordinal('13')).toBe('13th');
    // bigger numbers
    expect(index_1.ordinal('21')).toBe('21st');
    expect(index_1.ordinal('22')).toBe('22nd');
    expect(index_1.ordinal('55')).toBe('55th');
    expect(index_1.ordinal('102')).toBe('102nd');
});
//# sourceMappingURL=ordinal.test.js.map