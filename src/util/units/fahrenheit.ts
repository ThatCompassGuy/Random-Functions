export default function fromFahrenheit(num: number | string, convertTo: string, round?: number) : string {
    num = Number(num);
    if (!convertTo) throw new Error('Unit to convert to must be provided');
    switch (convertTo.toLowerCase()) {
        case 'celsius':
            return round ?  ((num - 32) * 5 / 9).toFixed(round) + '°C' : ((num - 32) * 5 / 9) + '°C';

        case 'kelvin':
            return round ? ((num - 32) * 5 / 9 + 273.15).toFixed(round) + 'K' : ((num - 32) * 5 / 9 + 273.15) + 'K';

        case 'fahrenheit':
            return round ? (num).toFixed(round) + '°F' : num + '°F';

        default:
            throw new Error(JSON.stringify(convertTo) + ' is not a valid unit of temperature');
    }
}