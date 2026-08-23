let scores = [80, 90, 75, 95];

// Passing a function directly into forEach
scores.forEach(function(score) {
    console.log("Score is: " + score);
});
//modern
scores.forEach(score => console.log("Score is: "+ score));
///index print also
scores.forEach((score, index) => {
    console.log(`Index ${index}: ${score}`);
});