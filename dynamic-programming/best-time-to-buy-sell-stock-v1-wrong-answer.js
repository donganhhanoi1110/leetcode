
/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Example 1:

 Input: prices = [7,1,5,3,6,4]
 Output: 5
 Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
 Example 2:

 Input: prices = [7,6,4,3,1]
 Output: 0
 Explanation: In this case, no transactions are done and the max profit = 0.
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minArr = findMin(prices)

    let maxArr = [minArr[0], minArr[1]]
    for (let i = minArr[0]; i < prices.length; i++) {
        if (prices[i] > maxArr[1]) {
            maxArr[1] = prices[i]
            maxArr[0] = i
        }
    }

    let maxProfitNum = maxArr[1] - minArr[1]
    if (maxProfitNum < 0) {
        return 0
    }
    return maxProfitNum
};

/**
 * Time: O(n^2) - Loop run n * (n-1) / 2 times
 * Space: O(1) - Only 2 variables to be used => max and profit
 * Failed with Time exceeded
 * Test case ~93714 elements: https://leetcode.com/submissions/detail/513848651/testcase/
 * @param prices
 * @returns {number}
 */
function maxProfit2(prices) {
    let max = 0
    for (let i = 0; i < prices.length; i++) {
        for (let j=i+1; j < prices.length; j++) {
            let profit = prices[j] - prices[i]
            if (profit > max) {
                max = profit
            }
        }
    }
   return max
}

let findMin = function(prices) {
    let result = [0,prices[0]]
    for (let i = 0; i < prices.length; i++) {
        if ( prices[i] < result[1]) {
            result[0] = i
            result[1] = prices[i]
        }
    }
    return result
}


console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([2,4,1])) // 2 => Failed
console.log(maxProfit2([7,1,5,3,6,4])) // 5
console.log(maxProfit2([7,6,4,3,1])) // 0
console.log(maxProfit2([2,4,1])) // 2