/**
 * Given an array with m,n, find the ways to run from top left to bottom right with only move down or right.
 *
 * Example: m=3, n=2
 * 1 1 1
 * 1 1 1
 * Steps = 3
 * R R D
 * R D R
 * D R R
 *
 */

/**
 * Time complexity = 2^(m+n)
 * @param m
 * @param n
 * @returns {number|*}
 */
function gridTravelerRecursive(m,n) {
   if (m === 1 && n === 1) return 1
   if (m === 0 || n ===0) return 0
   return gridTravelerRecursive(m-1, n) + gridTravelerRecursive(m, n-1)
}
/**
 * Time Complexity: m*n
 * Grid Traveler
 * @param m
 * @param n
 * @param memo
 * @returns {number}
 */
function gridTraveler(m,n, memo = {}) {
   if (m === 1 && n === 1) return 1
   if (m === 0 || n ===0) return 0
   let key = m+','+n
   if (key in memo) return memo[key]

   memo[key] = gridTraveler(m-1,n, memo) + gridTraveler(m,n-1, memo)

   return memo[key]
}

console.log(gridTraveler(3,2))
console.log(gridTraveler(2,3))
console.log(gridTraveler(3,3))
console.log(gridTraveler(4,3))
//or exports = {function1}
module.exports = {

}