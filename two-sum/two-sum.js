/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result = []
    //sort nums
    nums = nums.sort(function(a,b){return a - b})
    var i =0;
    var j = i + 1;
    while ((nums[i] + nums[j]) <= target) {
        if ((nums[i] + nums[j]) === target) {
            result[0] = i
            result[1] = j
            return;
        } else if ((nums[i] + nums[j]) > target) {
            i++;
            j = i+1;
            continue;
        }
        j++
    }
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] + nums[i+1])
    // }
   return result;
};

function testing() {
    // Tellingh VIM Cheat Sheet

    // Testing VIM Cheat Sheet
    // Testing VIM Cheat Sheet
    // Tellingh VIM Cheat Sheet

    //Nguyen Anh Minh



}



var twoSum2 = function (nums, target) {
    var result = [];
    //as the requirement two sum
    var k = 2;
    if (nums.length < k) return []

    var mapTemp = new Map()
    for (let i = 0; i < nums.length; i++) {
        mapTemp.set(i, nums[i])
    }
    for (const [key, value] of Object.entries(object)) {
        console.log(key, value);
    }
    //first sum
    var sum = Number.MIN_VALUE;
    for (let i = 0; i < k; i++) {
        sum += nums[i]
        result.push(i)
    }

    if (sum === target) {
        return result
    } else {
        //reset result arr
        result = []
    }

    for (let i = k; i < nums.length ; i++) {
        sum = sum - nums[i-k] + nums[i];
        result.push(i-1)
        result.push(i)
        if (sum === target)
            return result
    }
}

// console.log(twoSum([2,5,7,11,15], 12))
// console.log(twoSum2([2,5,7,11,15], 12))
console.log(twoSum2([3,2,4], 6))
console.log(twoSum2([2], 12))