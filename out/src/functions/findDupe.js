"use strict";
exports.__esModule = true;
function findDupe(arr) {
    if (!arr)
        throw new Error('An array must be provided');
    if (!Array.isArray(arr))
        throw new Error('A valid array must be provided');
    if (!arr[1])
        throw new Error('There must be at least two elements in the array');
    arr = arr
        .filter(function (e) { return !isNaN(e); })
        .sort(function (a, b) { return a - b; });
    var duplicates = [];
    var res = false;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i]) {
            duplicates.push(arr[i]);
            res = true;
        }
    }
    return res ? duplicates : undefined;
}
exports["default"] = findDupe;
//# sourceMappingURL=findDupe.js.map