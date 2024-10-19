/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// const removeElement = (nums, val) => {
//     for (let i = 0; i < nums.length; i++) {
//         if(nums[i] === val){
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     console.log(nums)
//     return nums.length
// };

// optimized -- gpt
var removeElement = function (nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index++] = nums[i];
    }
  }
  return index;
};

removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
