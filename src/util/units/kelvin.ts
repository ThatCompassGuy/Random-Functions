export default function fromKelvin(num: number | string, convertTo: string, round?: number) : string {
    num = Number(num);
    if (!convertTo) throw new Error('Unit to convert to must be provided');
    switch (convertTo.toLowerCase()) {
        case 'celsius':
            return round ? (num - 273.15).toFixed(round) + '°C' : (num - 273.15) + '°C';

        case 'fahrenheit':
            return round ? ((num - 273.15) * 9 / 5 + 32).toFixed(round) + '°F' : ((num - 273.15) * 9 / 5 + 32) + '°F';

        case 'kelvin':
            return round ? (num).toFixed(round) + 'K' : num + 'K';

        default:
            throw new Error(JSON.stringify(convertTo) + ' is not a valid unit of temperature');
    }
}