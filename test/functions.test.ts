import { findDupe, ordinal, reverse, convert, deform } from '../src/index';

test('find duplicate number in array', () => {
    // no dupe
    expect(findDupe(['1', '2', '3'])).toBeUndefined();
    // 1 dupe
    expect(findDupe(['1', '2', '2'])).toStrictEqual([2]);
    expect(findDupe(['1', '2', '2', 'sneaky string'])).toStrictEqual([2]);
    // more than 1 dupe
    expect(findDupe([1, 1, 1, 1, 1])).toStrictEqual([1, 1, 1, 1]);
    expect(findDupe([1, 1, 2, 2])).toStrictEqual([1, 2]);
    expect(findDupe([1, 1, 2, 2, 'another string'])).toStrictEqual([1, 2]);
});

test('ordinals', () => {
    // 1, 2, 3 and 4
    expect(ordinal(1)).toStrictEqual('1st');
    expect(ordinal(2)).toStrictEqual('2nd');
    expect(ordinal(3)).toStrictEqual('3rd');
    expect(ordinal(4)).toStrictEqual('4th');
    // in 10s 
    expect(ordinal('11')).toStrictEqual('11th');
    expect(ordinal('12')).toStrictEqual('12th');
    expect(ordinal('13')).toStrictEqual('13th');
    // bigger numbers
    expect(ordinal('21')).toStrictEqual('21st');
    expect(ordinal('22')).toStrictEqual('22nd');
    expect(ordinal('55')).toStrictEqual('55th');
    expect(ordinal('102')).toStrictEqual('102nd');
});

test('reverse strings', () => {
    expect(reverse('This is a test')).toStrictEqual('tset a si sihT');
});

test('convert temperatures', () => {
    // from celsius
    expect(convert(1, { from: 'celsius', to: 'fahrenheit' })).toStrictEqual('33.8°F');
    expect(convert(1, { from: 'celsius', to: 'kelvin' })).toStrictEqual('274.15K');
    expect(convert(1, { from: 'celsius', to: 'celsius' })).toStrictEqual('1°C');
    // with rounding
    expect(convert(2, { from: 'celsius', to: 'fahrenheit', round: 1 })).toStrictEqual('35.6°F');
    expect(convert(2, { from: 'celsius', to: 'kelvin', round: 1 })).toStrictEqual('275.1K');
    expect(convert(2, { from: 'celsius', to: 'celsius', round: 1 })).toStrictEqual('2.0°C');

    // from kelvin
    expect(convert(1, { from: 'kelvin', to: 'fahrenheit' })).toStrictEqual('-457.87°F');
    expect(convert(1, { from: 'kelvin', to: 'celsius' })).toStrictEqual('-272.15°C');
    expect(convert(1, { from: 'kelvin', to: 'kelvin' })).toStrictEqual('1K');
    // with rounding
    expect(convert(2, { from: 'kelvin', to: 'fahrenheit', round: 1 })).toStrictEqual('-456.1°F');
    expect(convert(2, { from: 'kelvin', to: 'celsius', round: 1 })).toStrictEqual('-271.1°C');
    expect(convert(2, { from: 'kelvin', to: 'kelvin', round: 1 })).toStrictEqual('2.0K');

    // from fahrenheit
    expect(convert(1, { from: 'fahrenheit', to: 'kelvin' })).toStrictEqual('255.92777777777775K');
    expect(convert(1, { from: 'fahrenheit', to: 'celsius' })).toStrictEqual('-17.22222222222222°C');
    expect(convert(1, { from: 'fahrenheit', to: 'fahrenheit' })).toStrictEqual('1°F');
    // with rounding
    expect(convert(2, { from: 'fahrenheit', to: 'kelvin', round: 1 })).toStrictEqual('256.5K');
    expect(convert(2, { from: 'fahrenheit', to: 'celsius', round: 1 })).toStrictEqual('-16.7°C');
    expect(convert(2, { from: 'fahrenheit', to: 'fahrenheit', round: 1 })).toStrictEqual('2.0°F');
});

test('deform strings', () => {
    // without randomisation
    expect(deform('hello world!', false)).toStrictEqual('hElLo wOrLd!');
    
    // with randomisation
    const str = "this is a string";
    expect(deform(str, true).length).toStrictEqual(16);
    expect(deform(str, true).length).toStrictEqual(16);
});