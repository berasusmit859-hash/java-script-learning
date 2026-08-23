let rawScores = [42, 85, 90, 33, 76, 55, 98];
//.map() loops through an array, applies your function to every single item, and automatically returns a brand-new array.
//This lets you test a condition on every item. If your function returns true, the item stays; if false, it gets dropped into a new array.
// Chaining .filter() and .map() together in one clean pipeline
let boostedPassingScores = rawScores
    .filter(score => score >= 50)   // Step 1: Keeps [85, 90, 76, 55, 98]
    .map(score => score + 5);       // Step 2: Adds 5 to each -> [90, 95, 81, 60, 103]

console.log(boostedPassingScores); 
