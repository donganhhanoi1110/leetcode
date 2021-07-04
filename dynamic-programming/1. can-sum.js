/**
 * https://www.youtube.com/watch?v=oBt53YbR9Kk&t=6219s
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
 * @returns {boolean}
 */
function canSumBruteForce(target, numbers) {
    if (target === 0) return true
    if (target < 0) return null

    for (let num of numbers) {
        let remainder = target - num
        let canSum = canSumBruteForce(remainder, numbers)
        if (canSum) {
            return true
        }
    }
    return false
}

function canSumMemoization(target, numbers, memo = {}) {
    if (target === 0) return true
    if (target < 0) return null
    if (target in memo) return memo[target]
    for (let num of numbers) {
        let remainder = target - num
        // this can be null or boolean
        let canSum = canSumMemoization(remainder, numbers, memo)
        if (canSum) {
            memo[target] = canSum
            return memo[target]
        }
    }
    memo[target] = false
    return memo[target]
}

console.log(canSumMemoization(7, [5,3,4,7])) // true
console.log(canSumMemoization(7, [2,4])) // false
console.log(canSumMemoization(8, [1,4,5])) // [4,4]
console.log(canSumMemoization(500, [1,2,5,25])) // [25,25,25,25]

console.log(canSumBruteForce(7, [5,3,4,7])) // true
console.log(canSumBruteForce(7, [2,4])) // false
console.log(canSumBruteForce(8, [1,4,5])) // [4,4]
console.log(canSumBruteForce(500, [1,2,5,25])) // [25,25,25,25]