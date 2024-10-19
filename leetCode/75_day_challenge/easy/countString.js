// const count = (string) => {
//   string = string.split(" ");
//   let map = new Map();
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (map.has(string[i])) {
//       let getData = map.get(string[i]) + 1;
//       map.set(string[i], getData);
//     } else {
//       map.set(string[i], 1);
//     }
//   }
//   map.forEach((val) => {
//     count = Math.max(val, count);
//   });
//   return count;
// };

// 3 == fizz, 5 === buzz, 3 & 5 === fizzbuzz
// console.log(count("Welcome to the world of interview. Best of luck to you to of of"));

/**
 *
 * @param {arr[number]} arr
 */
// const fizzbuzz = () => {
//     let arr = [];
//     for (let i = 1; i <= 100; i++) {
//       if (i % 3 === 0 && i % 5 === 0) {
//         arr.push("fizzbuzz");
//       } else if (i % 3 === 0) {
//         arr.push("fizz");
//       } else if (i % 5 === 0) {
//         arr.push("buzz");
//       } else {
//         arr.push(i);
//       }
//     }
//     return arr;
//   };

const string = "anshulmanojtoandtotoandmanojtomanoj";
let count = 0;
for (let i = 0; i < string.length; i++) {
  if (string[i] === "t" && string[i + 1] === "o") {
    count++;
    i+2
  }
}
console.log(count);

// console.log(fizzbuzz());
