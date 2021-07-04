/**
 * https://www.youtube.com/watch?v=oBt53YbR9Kk&t=6219s
 *
 * Time:
 * m = target sum
 * n = numbers.length
 * O (n^m * m)
 *
 * Space: O (m1 ) = O (m)
 * m1 = m (height of the tree)
 *
 * @param target
 * @param numbers
 * @returns {*[]}
 */
function howSumBruteForce(target, numbers) {
    if (target === 0) return []
    if (target < 0) return null


    for (let num of numbers) {
        let remainder = target - num
        let sumArr = howSumBruteForce(remainder, numbers)
        // console.log(remainder + '=> result: ' + sumArr)
        if (sumArr != null) {
            //create a copy of an array => so that will actually take sort of a linear numbers of steps
            //to copy over every element of an array.
            let targetArrResult = [...sumArr, num]
            // console.log(remainder + '=> result: ' + [...targetArrResult])
            return targetArrResult
        }
    }
    //if we loop all nums but can't find any matching value, just return null
    return null
}
/**
 * Time:
 * m = target sum
 * n = numbers.length
 * O (n * m * m)
 *
 * Space: O (m1 * m2) = O (m^2)
 * m1 = m (height of the tree)
 * m2 = m (value of memo object is an array of m
 *
 * @param target
 * @param numbers
 * @param memo
 * @returns {*[]}
 */

function howSumMemoization(target, numbers, memo = {}) {
    if (target in memo) return memo[target]
    if (target === 0) return []
    if (target < 0) return null
    for (let num of numbers) {
        let remainder = target - num
        let sumArr = howSumMemoization(remainder, numbers, memo)
        // console.log(remainder + '=> result: ' + sumArr)
        if (sumArr !== null) {
            let targetArrResult = [...sumArr, num]
            memo[target] = targetArrResult
            // console.log(remainder + '=> result: ' + [...targetArrResult])
            return targetArrResult
        }
    }

    //if we loop all nums but can't find any matching value, just return null
    memo[target] = null
    return null

}

console.log(howSumMemoization(7, [5,3,4,7])) // true
console.log(howSumMemoization(7, [2,4])) // false
console.log(howSumMemoization(8, [1,4,5])) // [4,4]
console.log(howSumMemoization(300, [7,14])) // null
console.log('-----')
console.log(howSumBruteForce(7, [5,3,4,7])) // true
console.log(howSumBruteForce(7, [2,4])) // false
console.log(howSumBruteForce(8, [1,4,5])) // [4,4]
console.log(howSumBruteForce(300, [7,14])) // null