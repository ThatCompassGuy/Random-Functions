import { findDupe } from '../src/index';

test('find duplicate number in array', () => {
    // invalid array
    expect(findDupe(['1'])).toThrowError(Error());
    // no dupe
    expect(findDupe(['1', '2', '3'])).toBeUndefined();
    // 1 dupe
    expect(findDupe(['1', '2', '2'])).toBe([2]);
    expect(findDupe(['1', '2', '2', 'sneaky string'])).toBe([2]);
    // more than 1 dupe
    expect(findDupe([1, 1, 1, 1, 1])).toBe([1, 1, 1, 1]);
    expect(findDupe([1, 1, 2, 2])).toBe([1, 2]);
    expect(findDupe([1, 1, 2, 2, 'another string!'])).toBe([1, 2]);
});