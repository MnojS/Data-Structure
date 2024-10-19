// const noIfFunc = (nums, disclude) => {
//     let index = nums.indexOf(disclude)
//     nums.splice(index, 1)
//     return nums
// }
// console.log(noIfFunc(["A", "B", "C", "D"], "C"))

// class frequent {
//   /**
//    * @param {number[]} nums
//    * @param {number} k
//    * @return {number[]}
//    */

//   static resultFrequent(nums, k) {
//     /**
//      * @type {Map<number, number>} map
//      * @type {number[]} nums
//      */
//     const map = new Map();
//     for (let i = 0; i < nums.length; i++) {
//       if (!map.has(nums[i])) {
//         map.set(nums[i], 1);
//       } else {
//         let increase = map.get(nums[i]) + 1;
//         map.set(nums[i], increase);
//       }
//     }

//     /**
//      * @type {number[]}
//      */

//     let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);

//     /**
//      * @type {number[]}
//      */
//     let result = [];
//     for (let i = 0; i < k; i++) {
//       result.push(sorted[i][0]);
//     }
//     console.log(result);
//   }
// }
// const nums = [1, 1, 1, 2, 2, 6, 6, 3, 3, 3, 3];
// const k = 3;
// frequent.resultFrequent(nums, k);

// class reverse {
//   /**
//    *
//    * @param {String} string
//    */
//   static reverseString(string) {
//     const special = "!@#$%^&*()-=|[]{}".split("");
//     string = string.split("");
//     let left = 0;
//     let right = string.length - 1;
//     while (right > left) {

//       if (!special.includes(string[left]) && !special.includes(string[right])) {
//         let temp = string[left];
//         string[left] = string[right];
//         string[right] = temp;

//         console.log("here");
//         right--;
//         left++;
//       }
//       if (special.includes(string[left])) {
//         left++;
//       }
//       if (special.includes(string[right])) {
//         right--;
//       }
//     }
//     console.log(string.join(""));
//   }
// }

// let string = "a-bCdEf=ghlj!!";
// reverse.reverseString(string);


class TreeNode {
    constructor(value){
        this.value = value
        this.leftNode = null
        this.rightNode= null
    }
}

function maxDepth(root){
    if(!root){
        return 0
    }
    let leftNode = maxDepth(root.left)
    let rightNode = maxDepth(root.rightNode)
    return Math.max(leftNode, rightNode) + 1
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

let max = maxDepth(root)

console.log(max)
