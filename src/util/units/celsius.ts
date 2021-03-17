export default function fromCelsius(num: number | string, convertTo: string, round?: number) : string {
    num = Number(num);
    if (!convertTo) throw new Error('Unit to convert to must be provided');
    switch (convertTo.toLowerCase()) {
        case 'fahrenheit':
            return round ? ((num * 9 / 5) + 32).toFixed(round) + '°F' : ((num * 9 / 5) + 32) + '°F';

        case 'kelvin':
            return round ? (num + 273.15).toFixed(round) + 'K' : (num + 273.15) + 'K';

        case 'celsius':
            return round ? (num).toFixed(round) + '°C' : num + '°C';

        default:
            throw new Error(JSON.stringify(convertTo) + ' is not a valid unit of temperature');
    }
}