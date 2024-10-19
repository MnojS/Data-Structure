// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

// Example 1:

// Input: nums = [1,12,-5,-6,50,3], k = 4
// Output: 12.75000
// Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
// Example 2:

// Input: nums = [5], k = 1
// Output: 5.00000

// solution
// const findMaxAverage = (nums, k) => {
//   let left = 0;
//   let avgSum = 0;
//   let currentSum = 0;
//   for (let i = 0; i < nums.length; i++) {

//     for (k = k - 1; k < nums.length; k++) {
//       if (i === k - 1) {
//         if (currentSum / k > avgSum) {
//           avgSum = currentSum / k;
//         }
//         currentSum -= nums[left];
//         left++;
//       } else {
//         currentSum += nums[i];
//       }
//     }
//   }

//   return parseFloat(avgSum.toFixed(5));
// };
const findMaxAverages = (nums, k) => {
  let currentSum = 0;
  let avgSum = 0;
  let left = 0;
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }
  avgSum = currentSum / k;

  for (let right = k; right < nums.length; right++) {
    currentSum += nums[right] - nums[left];
    left++;
    avgSum = Math.max(avgSum, currentSum / k);
  }

  return parseFloat(avgSum.toFixed(5));
};

const findMaxAverage = (nums, k) => { // [2, 3, 5, 6, 8, 1] , k = 2
  let left = 0;
  let avgSum = 0;
  let currentSum = 0;
  for (let i = 0; i < k; i++) { [2, 3]
    currentSum += nums[i];
  }
  avgSum = currentSum / k;

  for (let right = k; right < nums.length; right++) {
    currentSum += nums[right] - nums[left];
    avgSum = Math.max(currentSum / k, avgSum);
    left++;
  }
  return avgSum;
};
// const result = findMaxAverage([1, 12, -5, -6, 50, 3], 4);
// console.log(result);

class slidingWindow {
  constructor() {
    this.currentSum = 0;
    this.avgSum = 0;
    this.left = 0;
  }

  /**
   * @param {Array<number>} arr
   */
  calculateFirstSlide(arr) {
    for (let i = 0; i < k; i++) {
      this.currentSum += arr[i];
    }
  }
  // avgSum = currentSum / k
  avgSum = this.currentSum / k;

  calculateRestSlide(){

  }

}


function call() {
  let sum = 0

  function increment() {
    sum += 8
  }

  function check() {
    const sum = 0
  }

}
