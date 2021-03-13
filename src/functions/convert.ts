import { fromCelsius, fromFahrenheit, fromKelvin, Options } from '../../util';

export default function convert(num: number | string, options: Options) : string {
    num = Number(num);
    if (isNaN(num)) throw new Error(JSON.stringify(num) + ' is not a valid number');
    if (!options) throw new Error('Options must be provided');
    const { from, to } = options;
    if (!from) throw new Error('Unit to convert from must be provided');
    if (!to) throw new Error('Unit to convert to must be provided');

    switch (from.toLowerCase()) {
        case 'celsius':
            return fromCelsius(num, to.toLowerCase());

        case 'fahrenheit':
            return fromFahrenheit(num, to.toLowerCase());

        case 'kelvin':
            return fromKelvin(num, to.toLowerCase());

        default:
            throw new Error(JSON.stringify(from) + ' is not a valid unit of temperature');
    }
}