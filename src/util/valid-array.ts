export default function valid(arr: any[]) : boolean {
    if (!arr || !Array.isArray(arr) || arr.length < 2) return false;
    return true;
}