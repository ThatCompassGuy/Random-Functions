import { valid } from '../util';

export default function findDupe(nums: any[]) : number | number[] | undefined  {
    if (!valid(nums)) throw new Error('A valid array must be provided');
    
    nums = nums.filter((num) => !isNaN(num));

    const duplicates = [];
    let res = false;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] === arr[i]) {
            duplicates.push(parseInt(arr[i]));
            res = true;
        }
    }

    return res ? duplicates : undefined;
}    return results.length == 1 ? results[0] : results.length == 0 ? undefined : results;
