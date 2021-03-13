import { convert } from '../src/index';

test('convert temperatures', () => {
    // invalid params
    expect(convert('test', { from: 'unit1', to: 'unit2' })).toThrowError(Error());
    expect(convert('1', { from: 'unit1', to: 'unit2' })).toThrowError(Error());
    expect(convert('1', { from: 'celsius', to: 'unit1' })).toThrowError(Error());
    // from celsius
    expect(convert(1, { from: 'celsius', to: 'fahrenheit' })).toBe('33.8°F');
    expect(convert(1, { from: 'celsius', to: 'kelvin' })).toBe('274.15K');
    expect(convert(1, { from: 'celsius', to: 'celsius' })).toBe('1°C');
    expect(convert(2, { from: 'celsius', to: 'fahrenheit' })).toBe('35.6°F');
    expect(convert(2, { from: 'celsius', to: 'kelvin' })).toBe('275.15K');
    expect(convert(2, { from: 'celsius', to: 'celsius' })).toBe('2°C');
    // from kelvin
    expect(convert(1, { from: 'kelvin', to: 'fahrenheit' })).toBe('-457.87°F');
    expect(convert(1, { from: 'kelvin', to: 'celsius' })).toBe('-272.15°C');
    expect(convert(1, { from: 'kelvin', to: 'kelvin' })).toBe('1K');
    expect(convert(2, { from: 'kelvin', to: 'fahrenheit' })).toBe('-456.07°F');
    expect(convert(2, { from: 'kelvin', to: 'celsius' })).toBe('-271.15°C');
    expect(convert(2, { from: 'kelvin', to: 'kelvin' })).toBe('2K');
    // from fahrenheit
    expect(convert(1, { from: 'fahrenheit', to: 'kelvin' })).toBe('255.928K');
    expect(convert(1, { from: 'fahrenheit', to: 'celsius' })).toBe('-17.2222°C');
    expect(convert(1, { from: 'fahrenheit', to: 'fahrenheit' })).toBe('1°F');
    expect(convert(2, { from: 'fahrenheit', to: 'kelvin' })).toBe('256.483K');
    expect(convert(2, { from: 'fahrenheit', to: 'celsius' })).toBe('-16.6667°C');
    expect(convert(2, { from: 'fahrenheit', to: 'fahrenheit' })).toBe('2°F');
});