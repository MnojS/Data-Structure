// 5. Sort Colors
// Medium
// Topics
// Companies
// Hint
// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

/**
 Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums: number[]): void => {
  /**
   * using bubble sort
   */
  let left: number = 0;
  let currentPointer: number = 1;
  let maxLength: number = nums.length;
  while (maxLength > 0) {
    if (currentPointer === maxLength) {
      maxLength -= 1;
      left = 0;
      currentPointer = 1;
    } else if (nums[left] > nums[currentPointer]) {
      [nums[left], nums[currentPointer]] = [nums[currentPointer], nums[left]];
      left++;
      currentPointer++;
    } else {
      left++;
      currentPointer++;
    }
  }
  console.log(nums);
};

class sortingAlgorithms {
  public bubbleSort = (nums: number[]): any => {
    let prev: number = 0;
    let next: number = 1;
    let maxLength: number = nums.length;
    while (maxLength > 0) {
      if (next === maxLength) {
        maxLength -= 1;
        prev = 0;
        next = 1;
      } else if (nums[prev] > nums[next]) {
        [nums[prev], nums[next]] = [nums[next], nums[prev]];
        prev++;
        next++;
      } else {
        prev++;
        next++;
      }
    }
    return nums;
  };

  public selectionSort = (nums: number[]): any => {
    let currentPointer: number = 0;
    for (let i = 0; i < nums.length; i++) {
      let min = nums[i];
      for (let j = currentPointer; j < nums.length; j++) {
        min = Math.min(min, nums[j]);
        console.log(min)
      }
      console.log(nums[currentPointer], nums[min]);
      [nums[currentPointer], nums[min]] = [nums[min], nums[currentPointer]];
      currentPointer += 1;
    }
    return nums;
  };
}

// sortColors([2, 0, 2, 1, 6, 7, 2, 3, 1, 8, 12, 1, 0]);
let nums: number[] = [2, 0, 7, 0];
const sortingMethods = new sortingAlgorithms();
const method = sortingMethods.selectionSort(nums);
console.log(method );
