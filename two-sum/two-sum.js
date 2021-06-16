/**
 * https://leetcode.com/problems/two-sum/
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    console.log('>>Start two-sum1<<')
    var result = [];

    //Add item to Map
    const mapTemp = new Map();
    for (let i = 0; i < nums.length; i++) {
        mapTemp.set(nums[i], i)
    }
    console.log('Original Map: ' + [...mapTemp])

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (mapTemp.get(complement) && mapTemp.get(complement) !== i) {
            return [i, mapTemp.get(complement)]
        }
    }
    return result
};

var twoSum2 = function (nums, target) {
    console.log('>>Start two-sum<<')
    var result = [];
    //as the requirement two sum
    var k = 2;
    if (nums.length < k) return []

    //Add item to Map
    const mapTemp = new Map();
    for (let i = 0; i < nums.length; i++) {
        mapTemp.set(nums[i], i)
    }
    console.log('Original Map: ' + [...mapTemp])
    const sortedMap = new Map([...mapTemp.entries()].sort((a,b) => a[1] - b[1]))
    const sortedArr = [...sortedMap.entries()]
    console.log('Sorted Map: ' + [...sortedMap])
    //first sum
    var sum = Number.MIN_VALUE;
    for (let i = 0; i < k; i++) {
        let [key, value] = sortedArr[i];
        sum += value
        result.push(key)
    }

    if (sum === target) {
        return result
    } else {
        //reset result arr
        result = []
    }

    //slide the 2-window to next position
    for (let i = k; i < nums.length ; i++) {

        sum = sum - sortedArr[i-k][1] + sortedArr[i][1];
        result.push(sortedArr[i-1][0])
        result.push(sortedArr[i][0])
        if (sum === target)
            return result
    }
    return []
}

/**
 * Test twoSum2 failed with [3,2,4], target=6
 */
console.log(twoSum([2,5,7,11,15], 12))
console.log(twoSum([3,2,4], 6))//Expected [1,2]
console.log(twoSum([3,2,3], 6))//Expected [0,2]
console.log(twoSum([2], 12))//Expected []