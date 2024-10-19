// js
class digitSum {
  /**
   * @param {number[]} nums
   * @returns {number}
   */

  static minimumDigit(nums) {
    nums = nums.map((num) => {
      const newNum = num.toString().split("");
      let sum = 0;
      newNum.forEach((item) => {
        sum += Number(item);
      });
      return sum;
    });
    console.log(nums)
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        console.log(min, nums[i])
      min = Math.min(min, nums[i])
    }
    console.log(min)
    return min;
  }
}

digitSum.minimumDigit([10,12,13,14]);
