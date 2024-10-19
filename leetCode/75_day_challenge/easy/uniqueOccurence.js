// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
// Example 2:

// Input: arr = [1,2]
// Output: false
// Example 3:

// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

//solution
/**
 * 
 * @param {*} arr 
 * @returns 
 */
const uniqueOccurrences = (arr) => {
  let withMap = new Map();
  let array = [];
  arr.forEach((item) => {
    if (!withMap.get(item)) {
      withMap.set(item, 1);
    } else {
      withMap.set(item, withMap.get(item) + 1);
    }
  });
  withMap.forEach((item) => {
    array.push(item);
  });

  return array.length === [...new Set(array)].length ? true : false;
};

// const data = uniqueOccurrences([1, 2, 2, 1, 1, 3]);
// console.log(data);

class UniqueOccurrencesChecker {

  constructor() {
    this.withMap = new Map();
  }

  /**
   * @param {Array<number>} arr
   */

  countOccurrences(arr) {
    arr.forEach((item) => {
      if (!this.withMap.get(item)) {
        this.withMap.set(item, 1);
      } else {
        this.withMap.set(item, this.withMap.get(item) + 1);
      }
    });
  }

  /**
   * @returns {boolean}
   */
  returnUniquness() {
    let array = [];
    this.withMap.forEach((item) => array.push(item));
    return array.length === [...new Set(array)].length;
  }

  /**
   * Checks if all occurrences of elements in the given array are unique.
   * @param {{body: number[]}} param0 - An object containing the array to check.
   * @returns {Object} An object containing the result.
   */

  uniqueOccurrences({ body }) {
    this.countOccurrences(body);
    const result = this.returnUniquness();
    return result;
  }
}

const checker = new UniqueOccurrencesChecker();
const result = checker.uniqueOccurrences({ body: [1, 2, 2, 3, 3] });
console.log("result -->", result);
