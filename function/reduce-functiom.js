let numbers = [1, 2, 3, 4];

let sum = numbers.reduce((total, n) => {
    return total + n;
}, 0); // <-- 0 is where 'total' starts

console.log(sum); // Output: 10