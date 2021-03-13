"use strict";
exports.__esModule = true;
var util_1 = require("../../util");
function convert(num, options) {
    num = Number(num);
    if (isNaN(num))
        throw new Error(JSON.stringify(num) + ' is not a valid number');
    if (!options)
        throw new Error('Options must be provided');
    var from = options.from, to = options.to;
    if (!from)
        throw new Error('Unit to convert from must be provided');
    if (!to)
        throw new Error('Unit to convert to must be provided');
    switch (from.toLowerCase()) {
        case 'celsius':
            return util_1.fromCelsius(num, to.toLowerCase());
        case 'fahrenheit':
            return util_1.fromFahrenheit(num, to.toLowerCase());
        case 'kelvin':
            return util_1.fromKelvin(num, to.toLowerCase());
        default:
            throw new Error(JSON.stringify(from) + ' is not a valid unit of temperature');
    }
}
exports["default"] = convert;
//# sourceMappingURL=convert.js.map