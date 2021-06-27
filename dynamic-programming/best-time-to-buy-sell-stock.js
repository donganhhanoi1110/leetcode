
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
    if (prices.length > 1) {
        let maxN = prices[1] - prices[0]
        let minPrice = prices[0]
        let max = findMax(prices, 0, maxN, minPrice)
        if (max < 0) return 0
        return max
    } else {
        return 0
    }

};

let findMax = function(prices,i, max , minPrice) {

    if (i === prices.length) {
        return max
    }
    max = Math.max(prices[i] - minPrice, max)
    minPrice = Math.min(prices[i], minPrice)
    return findMax(prices, ++i, max, minPrice)
}

console.log(maxProfit([1,2,4])) // 3
console.log(maxProfit([1,2])) // 1
console.log(maxProfit([7,1,5,3,6,4])) // 5
console.log(maxProfit([7,6,4,3,1])) // 0
console.log(maxProfit([2,4,1])) // 2
console.log(maxProfit([5,7,1,4,8,2,6,5,0])) // 7
console.log(maxProfit([3,2,6,5,0,3])) // 4
