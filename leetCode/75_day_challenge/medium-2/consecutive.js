/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = (nums, k) => {
  let left = 0;
  let right = 0;
  let currentK = 0
  while (right < nums.length) {
    if(nums[right] === 0 && k > currentK){
      currentK++
    }
    if(nums[left] === 0){
      currentK--
    }
    right++
    left++
  }
};

console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 3));
