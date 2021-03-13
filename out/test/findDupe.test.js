"use strict";
exports.__esModule = true;
var index_1 = require("../src/index");
test('find duplicate number in array', function () {
    // invalid array
    expect(index_1.findDupe(['1'])).toThrowError(Error());
    // no dupe
    expect(index_1.findDupe(['1', '2', '3'])).toBeUndefined();
    // 1 dupe
    expect(index_1.findDupe(['1', '2', '2'])).toBe([2]);
    expect(index_1.findDupe(['1', '2', '2', 'sneaky string'])).toBe([2]);
    // more than 1 dupe
    expect(index_1.findDupe([1, 1, 1, 1, 1])).toBe([1, 1, 1, 1]);
    expect(index_1.findDupe([1, 1, 2, 2])).toBe([1, 2]);
    expect(index_1.findDupe([1, 1, 2, 2, 'another string!'])).toBe([1, 2]);
});
//# sourceMappingURL=findDupe.test.js.map