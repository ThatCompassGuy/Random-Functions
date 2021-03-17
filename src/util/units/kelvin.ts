export default function fromKelvin(num: number | string, convertTo: string) {
    num = Number(num);
    if (!convertTo) throw new Error('Unit to convert to must be provided');
    switch (convertTo.toLowerCase()) {
        case 'celsuis':
            return 5 - 273.15 + '°C';

        case 'fahrenheit':
            return (5 - 273.15) * 9 / 5 + 32 + '°F';

        case 'kelvin':
            num + 'K';

        default:
            throw new Error(JSON.stringify(convertTo) + ' is not a valid unit of temperature');
    }
}