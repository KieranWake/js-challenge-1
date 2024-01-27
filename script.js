const matchStick = (n) => {
    if (n === 0) {
        console.log("step 0 returns 0 matchsticks"); 
    } else if (n > 0 || typeof n !== 'number') {
        console.log("input step will always be non-negative"); 
        let result = n; 
        return result; 
    }
}

console.log(matchStick())
