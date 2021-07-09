/**
 * https://leetcode.com/problems/largest-divisible-subset/
 *
 * A simple solution is to generate all subsets of given set. For every generated subset, check if it is divisible or not. Finally print the largest divisible subset.
 * An efficient solution involves following steps.
 *
 *
 * Sort all array elements in increasing order. The purpose of sorting is to make sure that all divisors of an element appear before it.
 * Create an array divCount[] of same size as input array. divCount[i] stores size of divisible subset ending with arr[i] (In sorted array). The minimum value of divCount[i] would be 1.
 * Traverse all array elements. For every element, find a divisor arr[j] with largest value of divCount[j] and store the value of divCount[i] as divCount[j] + 1.
 * Time Complexity : O(n2)
 * Auxiliary Space : O(n)
 * @param {number[]} nums
 * @returns {*}
 */
var bruteForceLIS = function(nums) {
    nums = nums.sort((a,b) => a-b)
    // array that maintains the maximum index
    // till which the condition is satisfied
    let divCount = new Array(nums.length);

    // we will always have at least one
    // element divisible by itself
    divCount.fill(1)

    // maintain the index of the last increment
    let prev = new Array(nums.length);
    prev.fill(-1)

    // index at which last increment happened
    let max_ind = 0;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {

            // only increment the maximum index if
            // this iteration will increase it
            if (nums[i] % nums[j] === 0 &&
                divCount[i] < divCount[j] + 1) {
                prev[i] = j;
                divCount[i] = divCount[j] + 1;

            }

        }
        // Update last index of largest subset if size
        // of current subset is more.
        if (divCount[i] > divCount[max_ind])
            max_ind = i;
    }

    // Print result
    let k = max_ind;
    let result = []
    while (k >= 0) {
        result.push(nums[k])

        k = prev[k];
    }

    return result;
}

/**
 *
 * Result from leetcode: success
 * Runtime: 8856 ms, faster than 5.13% of JavaScript online submissions for Largest Divisible Subset.
 * Memory Usage: 51.1 MB, less than 5.13% of JavaScript online submissions for Largest Divisible Subset.
 * @param nums
 * @returns {*}
 */
function lds(nums) {
    nums = nums.sort((a,b) => a-b)
    let divisibleArr = {}
    for (let i = 0; i < nums.length; i++) {
        let iDivisibleResultArr = ldsMemoization(nums[i], nums, i-1);
        divisibleArr[i] = iDivisibleResultArr
        console.log('i:' + i + ' => ' + iDivisibleResultArr)
        console.log('-------')
    }
    let maxi = 0
    let maxLength = divisibleArr[0].length
    for (let i = 1; i < nums.length; i++) {
        if( divisibleArr[i].length > maxLength) {
            maxi=i
            maxLength = divisibleArr[i].length
        }
    }
    return divisibleArr[maxi]
}

function ldsMemoization(target, nums, index, memo = {}) {

    if (index > nums.length) {
        // console.log('i: ' + index +  ' reach base case')
        return []
    }

    if (target in memo) return memo[target]

    let largest = []
    for (let j = index + 1; j < nums.length; j++) {
        // console.log("i: " + i + '->' + nums[i] + " j: " + j +'->'+nums[j])
        if (nums[j] && (nums[j] % target === 0)) {
            let ldsResult = ldsMemoization(nums[j], nums, j, memo)
            // console.log("nums[j]: " + nums[j] + " ldsResult:" + ldsResult)
            if (ldsResult) {
                let newResult = [...ldsResult, nums[j]]
                if (newResult) {
                    if (newResult.length > largest.length) {
                        largest = newResult
                    }
                }
            }
        }
    }

    memo[target] = largest
    return memo[target]
}

console.log(bruteForceLIS([1,2,3])) // 1,2 or 1,3
console.log(bruteForceLIS([1,2,4,8])) // 1,2,4,8
console.log(bruteForceLIS([4,8,10,240])) // [4,8,240]
console.log(bruteForceLIS([3,4,16,8])) // [4,8,16]
console.log(bruteForceLIS([5,9,18,54,108,540,90,180,360,720])) //[9,18,90,180,360,720]
// console.log(lds([1,2,3])) // 1,2 or 1,3
// console.log(lds([1,2,4,8])) // 1,2,4,8
// console.log(lds([4,8,10,240])) // [4,8,240]
// console.log(lds([3,4,16,8])) // [4,8,16]
// console.log(lds([5,9,18,54,108,540,90,180,360,720])) //[9,18,90,180,360,720]

