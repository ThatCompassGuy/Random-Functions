import { reverse } from '../src/index'; 

test('oridinal', () => {
    // reverse text
    expect(reverse('This is a test')).toBe('tset a si sihT');
});