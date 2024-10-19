/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
    return [...new Set(nums)]
}
console.log(removeDuplicates([1,1,2]))