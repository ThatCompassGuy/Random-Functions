import { ordinal } from '../src/index';

test('ordinal', () => {
    // 1, 2, 3 and 4
    expect(ordinal(1)).toBe('1st');
    expect(ordinal(2)).toBe('2nd');
    expect(ordinal(3)).toBe('3rd');
    expect(ordinal(4)).toBe('4th');
    // in 10s 
    expect(ordinal('11')).toBe('11th');
    expect(ordinal('12')).toBe('12th');
    expect(ordinal('13')).toBe('13th');
    // bigger numbers
    expect(ordinal('21')).toBe('21st');
    expect(ordinal('22')).toBe('22nd');
    expect(ordinal('55')).toBe('55th');
    expect(ordinal('102')).toBe('102nd');
});