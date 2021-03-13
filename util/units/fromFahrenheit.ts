export default function fromFahrenheit(num: number | string, convertTo: string) {
    num = Number(num);
    if (!convertTo) throw new Error('Unit to convert to must be provided');
    switch (convertTo.toLowerCase()) {
        case 'celsius':
            return (num - 32) * 5 / 9 + '°C';

        case 'kelvin':
            return (num - 32) * 5 / 9 + 273.15 + 'K';

        case 'fahrenheit':
            return num + '°F';

        default:
            throw new Error(JSON.stringify(convertTo) + ' is not a valid unit of temperature');
    }
}