// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,0]
//              [0, 1, 2, 3, 4] --> splice // slice
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// solution
// try learning splice and slice more deeply
// const moveZeroes = (nums) => {

//     let first = 0;

//     for (let last = 0; last < nums.length; last++) {
//       // console.log(nums[last]) last = 3 --> 13
//       if (nums[last] !== 0) {

//         [nums[first], nums[last]] = [nums[last], nums[first]];
//         first++;

//       }
//   }
//   return nums
// };

const moveZeroes = (nums) => {
  let first = 0
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] !== 0){
      [nums[first], nums[i]] = [nums[i],nums[first]]
      first++
    }
  }
  return nums
};

console.log(moveZeroes([0,1,0,1,3]));
