type addFnType = (a: number, b: number) => number;
const addFn: addFnType = (a, b) => a + b;
console.log(addFn(2, 3));

type numberOrString = number | string;
type testFnType = (a: numberOrString, b: numberOrString) => numberOrString;

const testFn: testFnType = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error("Invalid");
}
console.log(testFn(5, 10));
console.log(testFn("Hello ", "World"));
// console.log(testFn("Hello", 10));
