// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {

    let prev1 = Infinity;
    let prev2 = Infinity;

    let isIncreasingTriplet = false;

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] > prev2 && prev2 > prev1) {
            isIncreasingTriplet = true;
            break;
        }
        if (nums[i] > prev1) prev2 = nums[i];
        else prev1 = nums[i];
    }
    return isIncreasingTriplet;
};


// console.log(increasingTriplet([1,2,3,4,5,6]))
console.log(increasingTriplet([20,100,10,12,5,13]));
