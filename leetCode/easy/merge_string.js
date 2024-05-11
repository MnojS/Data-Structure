// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.

 

// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
//solution:
// let word1="abc";
// let word2="pqr";
// let merge1="";
// if(word1.length===word2.length){
// for (let i = 0; i < word1.length; i++) {
//     let merge=(word1[i]||"")+(word2[i]||"");
//     merge1+=merge
//    }
// }
// else if(word1.length<word2.length){
// for (let i = 0; i < word2.length; i++) {
//     let merge=(word1[i]||"")+(word2[i]||"");
//     merge1+=merge
//    }
// }
// else{
// for (let i = 0; i < word1.length; i++) {
//     let merge=(word1[i]||"")+(word2[i]||"");
//     merge1+=merge
//    }
// }
// console.log(merge1)
let word1="abc";
let word2="pqr";
let merge1="";

for (let i = 0; i < word1.length+word2.length; i++) {
   let merge=(word1[i]||"")+(word2[i]||"");
    merge1+=merge
   }
console.log(merge1)