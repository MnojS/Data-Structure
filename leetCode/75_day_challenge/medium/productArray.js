// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

// solution

// const productExceptSelf = (nums) => {
//     const n = nums.length;
//     const result = new Array(n).fill(1);

//     for (let i = 1; i < n; i++) {
//         // console.log(" nums[i] -->", nums[i])
//         // console.log(" result[i - 1] -->",result[i - 1], " ---", "nums[i - 1]",nums[i - 1])
//       result[i] = result[i - 1] * nums[i - 1];
//     }

//     // // Loop 2: Incorporate elements to the right (excluding current element)
//     let product = 1;
//     for (let i = n - 2; i >= 0; i--) {
//       result[i] *= product;
//       product *= nums[i + 1];
//     }
//     console.log("result -->", result)
//     return result;
// };

// const productExceptSelf = (nums) => {
//   const n = nums.length;
//   const prefix = new Array(n).fill(1);
//   const suffix = new Array(n).fill(1);
//   let result = new Array(n);

//   for (let i = 1; i < n; i++) {
//     prefix[i] = prefix[i - 1] * nums[i - 1];
//   }
//   console.log(prefix)
//   // for (let i = n - 2; i >= 0; i--) {
//   //   suffix[i] = suffix[i + 1] * nums[i + 1];
//   // }

//   // for (let i = 0; i < n; i++) {
//   //   result[i] = prefix[i] * suffix[i]
//   // }

//   return result
// };

const productExceptSelf = (nums) => {
  const n = nums.length;
  let prefix = new Array(n).fill(1);
  let suffix = new Array(n).fill(1);
  let result = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] * nums[i - 1];
  }
  for (let i = n-2; i >= 0; i--) {
    suffix[i] = suffix[i+1] * nums[i+1]
  }
  for (let i = 0; i < n; i++) {
    result[i] = prefix[i] * suffix[i]
  }
  return result
};

console.log(productExceptSelf([1, 2, 3, 4, 5])); // ,120,60,20,5,1

// nums = [1, 2, 3, 4, 5]
// prefix = [1, 1, 2, 6, 1]
