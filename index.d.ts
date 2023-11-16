/**
Check if two arrays are equal.

It checks that the elements and order are the same.

@param array1 - The first array to compare.
@param array2 - The second array to compare.
@returns A boolean indicating whether the arrays are equal.

@example
```
import arrayEqual from 'array-equal';

arrayEqual([1, 2, 3], [1, 2, 3]);
//=> true

arrayEqual([1, 2, 3], [1, 2, 3, 4]);
//=> false
```
*/
export default function arrayEqual<T, U>(array1: T[], array2: U[]): array1 is T[];
