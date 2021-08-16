import { valid } from '../util';

export default function findDupe(nums: any[]) : number | number[] | undefined  {
    if (!valid(nums)) throw new Error('A valid array must be provided');
    
    nums = nums.filter((num) => !isNaN(num));

    const seen = new Map();
    const results: number[] = [];
    for (let num of nums) {
        num = parseInt(num);
        if (seen.has(num) && results.indexOf(num) == -1) {
            results.push(num);
        }
        seen.set(num, null);
    }
    return results.length == 1 ? results[0] : results.length == 0 ? undefined : results;
}
