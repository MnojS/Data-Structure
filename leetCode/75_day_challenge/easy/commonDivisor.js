// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

// Solution
const gcdOfStrings = (str1, str2) => {
  const max = str1.length > str2.length ? str1.length : str2.length;
  let result = "";
  for (let i = 0; i < max; i++) {
    if (str1[i] === str2[i]) {
      result += str1[i];
    }
  }

  if (str1.length % result.length === 0 && str2.length % result.length === 0) {
    // Check if the repeated result matches str1 and str2
    return result.repeat(str1.length / result.length);
  } else {
    return "";
  }
};
console.log(gcdOfStrings("ABCABC","ABCABC"))
// const gcdOfStrings = (str1, str2) => {
//   let result = "";
//   const minString = str1.length > str2.length ? str2 : str1;
//   const maxString = str1.length > str2.length ? str1 : str2;

//   const min = Math.min(str1.length, str2.length);
//   const max = Math.max(str1.length, str2.length);
//   let check = "";
//   for (let i = 0; i < max/min ; i ++) {
//     check += minString;
//   }
//   console.log("check -->",check, "maxString --> ",maxString)
//   if (check === maxString) {
//     let stack = [];
//     for (let i = 0; i < min; i++) {
//       if (str1[i] === str2[i]) {
//         result += str1[i];
//       }
//     }
//     if (result.length > 0) {
//       for (let i = 0; i < result.length; i++) {
//         if (!stack.includes(result[i])) {
//           stack.push(result[i]);
//         }
//       }
//       return stack.join("");
//     } else {
//       return "";
//     }
//   } else {
//     return "";
//   }
// };
