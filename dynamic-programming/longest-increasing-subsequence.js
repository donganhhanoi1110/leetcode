/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 *
 * Explanation: https://cp-algorithms.com/sequences/longest_increasing_subsequence.html#toc-tgt-7
 * @param {number[]} nums
 * @return {number}
 */
var bruteForceLIS = function(nums) {
    let maxArr = Array(nums.length).fill(1)

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0 ; j < i; j ++) {
            if ((nums[j] < nums[i]) ) {
                maxArr[i] = Math.max(maxArr[i], maxArr[j] + 1)
            }
        }

    }
    // console.log([...maxArr])
    let max = 0
    maxArr.forEach(m => {
        max = Math.max(max, m)
    })
    return max
}

var lis = function(nums) {
    let maxArr = []
    nums.forEach(i => {
        maxArr.push(1)
    })
    for (let i = 0; i < nums.length; i++) {
        maxArr[i] = lis_dp(nums, i, 0, maxArr)
    }
    // console.log([...maxArr])
    let max = 0
    maxArr.forEach(m => {
        max = Math.max(max, m)
    })
    return max
}

function lis_dp(nums, i, j, max ) {

    if (j > i) return max[i]

    if (nums[j] < nums[i]) {
        max[i] = Math.max(max[i], max[j] +1)
    }
    return lis_dp(nums, i, ++j, max)
}

console.log(bruteForceLIS([10,9,2,5,3,7,101,18])) //4
console.log(bruteForceLIS([0,1,0,3,2,3])) //4
console.log(bruteForceLIS([7,7,7,7,7,7,7]))//1
console.log(bruteForceLIS([4,10,4,3,8,9]))//3
console.log(bruteForceLIS([0,1,0,3,2,3]))//4
console.log(bruteForceLIS([1,3,6,7,9,4,10,5,6]))//6

console.log(lis([10,9,2,5,3,7,101,18]))
console.log(lis([0,1,0,3,2,3]))
console.log(lis([7,7,7,7,7,7,7]))
console.log(lis([4,10,4,3,8,9]))
console.log(lis([0,1,0,3,2,3]))
console.log(lis([1,3,6,7,9,4,10,5,6])) // 6

