export default function findDupe(arr: any[]) : number[] | undefined  {
    if (!arr) throw new Error('An array must be provided');
    if (!Array.isArray(arr)) throw new Error('A valid array must be provided');
    if (!arr[1]) throw new Error('There must be at least two elements in the array');

    arr = arr
        .filter(e => !isNaN(e))
        .sort((a, b) => a - b);

    let duplicates = [];
    let res = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i]) {
            duplicates.push(arr[i]);
            res = true;
        }
    }

    return res ? duplicates : undefined;
}