/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
  let maxValue = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const min = Math.min(height[left], height[right]);
    if (min * (right - left) > maxValue) {
      maxValue = min * (right - left);
    }
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return maxValue;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
