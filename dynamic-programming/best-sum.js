/**
 * Time:
 * m = target sum
 * n = numbers.length
 * O (n^m * m)
 *
 * Space: O (m1 * m2 ) = O (m^2)
 * m1 = m (height of the tree)
 * m2 = variable in each recursive call
 *
 * @param target
 * @param numbers
 * @returns {null|*[]}
 */
function bestSumBruteForce(target, numbers) {
    if (target === 0) return []
    if (target < 0) return null
    let shortestCombination = null // every recursive call will have this kind of space
    for (let num of numbers) {
       const remainder = target - num
       const remainderCombination = bestSum(remainder, numbers)
       if (remainderCombination !== null) {
            let newCombination = [...remainderCombination, num] //because we copy the array to new array => run m time
            //if the newCombination is shorter than the current shortest, update it
           if (shortestCombination === null || newCombination.length < shortestCombination.length) {
               shortestCombination = newCombination
           }
       }
    }
   return shortestCombination
}
/**
 * Time:
 * m = target sum
 * n = numbers.length, now we only loop for this numbers
 * m2 = m = when we copy the array to new array of m
 * O (m * n * m2) = O (m^2 * n)
 *
 *
 * Space: O (m1 * m2 ) = O (m^2)
 * m1 = number of keys in memo = m
 * m2 = each key have a value as [m] = m
 * Example: targetSum = 10
 * 1: [1,1,1,1,1,1,1,1,1,1]
 * ...
 *
 * @param target
 * @param numbers
 * @param memo
 * @returns {null|*[]}
 */
function bestSumMemoization(target, numbers, memo = {}) {
    if (target === 0) return []
    if (target < 0) return null
    //if we find it in memo, return it from memo
    if (target in memo) return memo[target]

    let shortestCombination = null
    for (let num of numbers) {
        const remainder = target - num
        // pass the memo object to inner recursive call
        const combination = bestSumMemoization(remainder, numbers, memo)
        if (combination !== null) {
            let newCombination = [...combination, num]
            //save the result to the memo
            //memo[remainder] = newCombination
            if (shortestCombination === null || newCombination.length < shortestCombination.length) {
                shortestCombination = newCombination
            }
        }
    }
    //before return it, we save it to memo
    memo[target] = shortestCombination
    return shortestCombination
}

// console.log(bestSumBruteForce(7, [5,3,4,7])) // [7]
// console.log(bestSumBruteForce(8, [2,3,5])) // [5,3]
// console.log(bestSumBruteForce(8, [1,4,5])) // [4,4]
// console.log(bestSumBruteForce(100, [1,2,5,25])) // [25,25,25,25]

console.log(bestSumMemoization(7, [5,3,4,7])) // [7]
console.log(bestSumMemoization(8, [2,3,5])) // [5,3]
console.log(bestSumMemoization(8, [1,4,5])) // [4,4]
console.log(bestSumMemoization(100, [1,2,5,25])) // [25,25,25,25]