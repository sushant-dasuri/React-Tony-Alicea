function memoizedSquare() {
    let memoizedResult = {};
    return function sq(a) {
        if (a in memoizedResult) {
            return memoizedResult[a];           
        }
        else {
            console.log("Calculating square...");
            const result = a * a;
            memoizedResult[a] = result;
            console.log(memoizedResult);
            return result;

        }
    }
}


const memoSq =  memoizedSquare();

console.log(memoSq(2));
console.log(memoSq(5));
console.log(memoSq(100));

console.log(memoSq(2));
console.log(memoSq(5));
console.log(memoSq(100));