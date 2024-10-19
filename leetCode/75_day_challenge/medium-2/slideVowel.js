/**
 * @param {string} string
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (string, k) {
  string = string.split("");
  const vowels = "aeiou".split("");
  let max = 0;
  let current = 0
  for (let i = 0; i < k; i++) {
    if (vowels.includes(string[i])) {
      current++;
    }
  }
  max = current

  for (let i = k; i < string.length; i++) {

    if (vowels.includes(string[i])) {
      current++;
    }
    if (vowels.includes(string[i - k])) {
      current--;
    }
    max = Math.max(current, max)
  }
  return max;
};

// maxVowels("leetcode", 3); // 2
maxVowels("abciiidef", 3);
