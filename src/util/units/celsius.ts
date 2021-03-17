export default function fromCelsius(num: number | string, convertTo: string) : string {
    num = Number(num);
    if (!convertTo) throw new Error('Unit to convert to must be provided');
    switch (convertTo.toLowerCase()) {
        case 'fahrenheit':
            return (num * 9 / 5) + 32 + '°F';

        case 'kelvin':
            return num + 273.15 + 'K';

        case 'celsius':
            return num + '°C';

        default:
            throw new Error(JSON.stringify(convertTo) + ' is not a valid unit of temperature');
    }
}