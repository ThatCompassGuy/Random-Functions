# Random Functions
I used to have a bunch of JavScript GitHub repos, they were all random functions (that are probably useless).
So, what I did is that I made it all into one repo, as well as making it in TypeScript instead because why not?

Example usage of each function:
```ts
// Ordinals
import { ordinal } from './src/index.ts';

ordinal(1) // expected: 1st
ordinal(2) // expected: 2nd
ordinal(3) // expected: 3rd
ordinal(4) // expected: 4th
```

```ts
// Reverse String
import { reverse } from './src/index.ts';

reverse('Hello World!') // expected: !dlroW olleH
```

```ts
import { findDupe } from './src/index.ts'

findDupe([1, 2, 3]) // expected: undefined
findDupe([1, 1]) // expected: [ 1 ]
findDupe([1, 1, 1, 2, 2, 2]) //expected: [ 1, 1, 2, 2 ]
```

```ts
import { convert } from './src/index.ts';

convert(1, { from: 'celsius', to: 'fahrenheit' }) // expected: 33.8°F
convert(2, { from: 'kelvin', to: 'celsius' }) // expected: -271.15°C
```