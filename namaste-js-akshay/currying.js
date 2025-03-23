const multiply = (multiplier) => {
    return (number) => number*multiplier;
}

tenx = multiply(10);
console.log(tenx(2));

//todo:
    
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function(...moreArgs) {
            return curried.apply(this, args.concat(moreArgs));
        }
    };
}

// Usage example
const sum = curry((a, b, c) => a + b + c);

console.log(sum(1)(2)(3));     // 6
console.log(sum(1, 2)(3));     // 6
console.log(sum(1)(2, 3));     // 6
console.log(sum(1, 2, 3));     // 6