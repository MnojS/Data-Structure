// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

// Example 1:

// Input: nums1 = [1,2,3], nums2 = [2,4,6]
// Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Example 2:

// Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]
// Output: [[3],[]]
// Explanation:
// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].

// solution

const findDifference = (n1, n2) => [
  [...new Set(n1)].filter((i) => !n2.includes(i)),
  [...new Set(n2)].filter((i) => !n1.includes(i)),
];

const data = findDifference([1, 2, 3], [2, 4, 6, 6, 6]);

// console.log(data);
// let arr1 = [1, 1, 2, 4, 5];
// let arr2 = [4, 5, 5, 3];
// arr1 = [...new Set(arr1)]
// arr2 = [...new Set(arr2)]

// const ans1 = []
// const ans2 = []

// arr1.forEach((i) => {
//     if(!arr2.includes(i)){
//         ans1.push(i)
//     }
// })
// arr2.forEach((i) => {
//     if(!arr1.includes(i)){
//         ans2.push(i)
//     }
// })

// console.log(ans1, ans2)
