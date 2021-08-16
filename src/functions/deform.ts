export default function deform(input: string, random?: boolean) : string {
    const results: Array<string> = [];
    input.split("").map((char, index) => {
        if (random) {
            results.push([1,2][Math.floor(Math.random() * 2)] === 1 ? char.toLowerCase() : char.toUpperCase());
        } else {
            results.push(index % 2 === 0 ? char.toLowerCase() : char.toUpperCase());
        }
    });
    return results.join("");
}