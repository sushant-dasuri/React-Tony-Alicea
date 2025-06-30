const numbers = [1, 2, 3, 4, 5];

const reducerFn = (accumulator, currentValue) => {
    console.log("--- Iteration ---");
    console.log("Accumulator: " + accumulator);
    console.log("Current Value: " + currentValue);

    const nextAccumulator = accumulator + " " + currentValue;
    console.log("Next Accumulator: " + nextAccumulator);

    return nextAccumulator;
}

const initalValue = 0;
const sum = numbers.reduce(reducerFn, initalValue);

console.log(sum);
