/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
// const countOfSubstrings = (word, k) => {
//     let count = 0
//     const vowels = "aeiou".split("")
//     const map = new Map()
//     vowels.forEach(i => map.set(i, 0))
//     for (let item = 0; item < word.length; item++) {

//     }
//     // while(i < word.length){

//     // }
// };

// countOfSubstrings("aeioqq",1)

function countVowelSubstrings(w, k) {
    let count = 0

    for (let s = 0; s < w.length; s++) {
        const vc = new Array(5).fill(0); // Array to count vowels: [a, e, i, o, u]
        let conC = 0; // Counter for consonants

        for (let e = s; e < w.length; e++) {
            const Cc = w[e]; 
            let vi = -1;
            if (Cc === 'a') {
                vi = 0;
            } else if (Cc === 'e') {
                vi = 1;
            } else if (Cc === 'i') {
                vi = 2;
            } else if (Cc === 'o') {
                vi = 3;
            } else if (Cc === 'u') {
                vi = 4;
            }

            if (vi !== -1) {
                vc[vi]++;
            } else {
                conC++;
            }

            if (hasAllVowels(vc) && conC === k) {
                count++;
            }
        }
    }
    return count; // Return the total count of valid substrings
}

// Helper function to check if all vowels are present
function hasAllVowels(vc) {
    for (let i = 0; i < vc.length; i++) {
        if (vc[i] === 0) {
            return false; // If any vowel is missing, return false
        }
    }
    return true; // All vowels are present
}

// Example usage
console.log(countVowelSubstrings("aeioqq", 1)); // Output: 0
console.log(countVowelSubstrings("aeiou", 0)); // Output: 1
console.log(countVowelSubstrings("ieaouqqieaouqq", 1)); // Output: 3

