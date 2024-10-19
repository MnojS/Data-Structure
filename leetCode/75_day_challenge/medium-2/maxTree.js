// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// function TreeNode(val, left, right) {
//   val = val === undefined ? 0 : val;
//   left = left === undefined ? null : left;
//   right = right === undefined ? null : right;
// }
// stupidity
// const maxDepth = (root) => {
//   let parentNode = 0;
//   let currentNode = 1;
//   let node = 2;
//   let maxDepth = 0;
//   for (let i = 0; i < root.length; i++) {
//     if (i === parentNode) {
//       maxDepth += 1;
//       currentNode = currentNode * node;
//     } else {
//       if (i >= currentNode) {
//         currentNode = currentNode * node;
//         maxDepth += 1;
//       }
//     }
//   }
//   console.log(maxDepth);
//   return maxDepth;
// };

// maxDepth([3, 9, 20, null, null]);
// maxDepth([1, null, 2]);

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const maxDepth = (root) => {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

// Creating the tree:
//     1
//    / \
//   2   3
//      / \
//     4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log("root -->", root);
console.log(maxDepth(root)); // Expected output: 3