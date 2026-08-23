// 1. Variables: No types needed. 'let' or 'const' handles everything.
let playerLevel = 10;          // Acts like an int
let healthPoints = 85.5;       // Acts like a float / double
let isAlive = true;            // Acts like a bool
let playerName = "Shadow";     // String

// 2. Functions: No return type or parameter types specified.
function updateHealth(currentHealth, damage, aliveStatus) {
    // We can check types or just do math directly
    let newHealth = currentHealth - damage;
    
    if (newHealth <= 0) {
        newHealth = 0;
        aliveStatus = false; // Reassigning the boolean
    }
    
    return { health: newHealth, status: aliveStatus };
}

// 3. Using the function
let result = updateHealth(healthPoints, 30.5, isAlive);

console.log(result.health);  
console.log(result.status); 