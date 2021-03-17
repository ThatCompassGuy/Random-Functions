export default function ordinal(num: number | string) : string {
    if (!num) throw new Error('No number was provided');
    if (isNaN(Number(num))) throw new Error('Invalid number provided');

    const arr = String(num).split('');
    const check = parseInt(arr[arr.length - 2]);
    const last = parseInt(arr[arr.length - 1]);

    if (check !== 1) {
        if (last === 1) {
            return num + 'st';
        } else if (last === 2) {
            return num + 'nd';
        } else if (last === 3) {
            return num + 'rd';
        } else {
            return num + 'th';
        }
    } else {
        return num + 'th';
    }
}