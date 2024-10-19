// Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Example 1:

// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// Example 2:

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

// Constraints:

// 0 <= n <= 105

// It is very easy to come up with a solution with a runtime of O(n log n). Can you do it in linear time O(n) and possibly in a single pass?
// Can you do it without using any built-in function (i.e., like __builtin_popcount in C++)?

/**
 * @param {number} n
 * @return {number[]}
 */
// const countBits = (n) => {
//   const binary = [1];
//   let result = [];
//   let current = 1;
//   for (let i = 1; i <= n; i++) {
//     current = current * 2;
//     binary.push(current);
//   }
//   for (let i = 0; i < n; i++) {
//     let currentSum = 0;
//     let ones = 0;
//     for (let j = binary.length - 1; j >= 0; j--) {
//       if (i + 1 > currentSum + binary[j]) {
//         currentSum = currentSum + binary[j];
//         ones++;
//       }
//       if (i + 1 === currentSum + binary[j]) {
//         ones++;
//         break;
//       }
//     }
//     result.push(ones);
//   }
//   return [0,...result];
// };
// countBits(10);

// >> binary operartion

class Solution {
  countBits(n) {
    const a = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
      a[i] = a[i >> 1] + (i & 1);
    }
    return a;
  }
}

const solution = new Solution();
console.log(solution.countBits(7)); // Output: [0, 1, 1, 2, 1, 2]
